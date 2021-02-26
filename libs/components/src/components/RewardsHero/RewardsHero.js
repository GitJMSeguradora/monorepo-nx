import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import moment from "moment";

// services
import { AccountStatementAPI } from "@monorepo-nx/services/api";
import { getUserProfile } from "@monorepo-nx/services/auth";
import { USER_TYPE, formatCurrency } from "@monorepo-nx/utils";
import { GTMServices } from "@monorepo-nx/services/gtm";

// elements
import * as S from "./styles";
import RewardsProgram from "./logo.png";
import ProgressBar from "../ProgressBar";

function RewardsHero({ rewardsHeroShow }) {
  const [production, setProduction] = useState({});
  const [current, setCurrent] = useState(null);
  const [next, setNext] = useState(null);
  const [annualProduction, setAnnualProduction] = useState(null);
  const [canView, setCanView] = useState(false);

  useEffect(() => {
    const userProfile = getUserProfile();

    async function fetchProduction() {
      try {
        const date = new Date();
        const currentYear = date.getFullYear();
        const currentBimester = Math.round((date.getMonth() + 1) / 2.0);

        const { data = {} } = await AccountStatementAPI.getProduction(
          currentYear,
          currentBimester
        );

        // set the whole production report
        setProduction(data && data.premium[0]);

        const { current, next, sumProductionOfYear } = data.incentiveProgram;

        // Set the current bonus trigger
        current && setCurrent(current);

        // Set the next bonus trigger
        next && setNext(next);

        // Set the total production of the current year
        sumProductionOfYear && setAnnualProduction(sumProductionOfYear);

        // Since there's a 20X return from API, we allow the banner to be viewed
        setCanView(true);
      } catch (error) {
        if (error.status === 403) {
          setCanView(false);
        }
      }
    }

    if (userProfile === USER_TYPE.policyholder) {
      return;
    } else {
      fetchProduction();
    }
  }, []);

  function goToRewardsPage() {
    GTMServices.createDataLayer({ event: "Escalada - Banner - Home" });

    window.location = process.env.NX_REACT_APP_PLATAFORMA_ESCALADA;
  }

  return rewardsHeroShow && canView ? (
    <S.Container aria-label="Programa de Escalada de Bônus">
      <S.Column width="244">
        <S.Logo role="presentation" src={RewardsProgram} />
        <S.Button onClick={() => goToRewardsPage()}>
          Quero saber mais
          <S.ArrowRight />
        </S.Button>
      </S.Column>
      <S.Column>
        <S.Title>Confira a sua evolução</S.Title>
        <S.SubTitle>
          Que tal alcançarmos <strong>JUNTOS</strong> esta marca?
        </S.SubTitle>

        <S.ProgressContainer>
          {current && (
            <S.ProgressWrapper>
              <ProgressBar
                id="currentStep"
                label={`Bônus ${formatCurrency(current.stepBonus)}`}
                valueNow={current.percentageCompleted}
                footNote={
                  current.amountLeft !== 0
                    ? `Faltam apenas ${formatCurrency(current.amountLeft)}`
                    : null
                }
              />
            </S.ProgressWrapper>
          )}

          {next && (
            <S.ProgressWrapper>
              <ProgressBar
                id="nextStep"
                label={`+ Bônus ${formatCurrency(next.stepBonus)}`}
                valueNow={next.percentageCompleted}
                footNote={
                  next.amountLeft !== 0
                    ? `Faltam apenas ${formatCurrency(next.amountLeft)}`
                    : null
                }
              />
            </S.ProgressWrapper>
          )}
        </S.ProgressContainer>
      </S.Column>
      <S.Column last={true}>
        <S.Premium>
          <S.PremiumTitle>Produção atual</S.PremiumTitle>
          <S.PremiumAmount>
            {formatCurrency(annualProduction, false)}
          </S.PremiumAmount>
          <S.UpdatedAt>
            Dados atualizados{" "}
            {moment(
              production && production.createdAt
                ? production.createdAt
                : new Date()
            ).format("HH:mm")}
          </S.UpdatedAt>
        </S.Premium>
      </S.Column>
    </S.Container>
  ) : null;
}

RewardsHero.propTypes = {
  rewardsHeroShow: PropTypes.bool
};

export default RewardsHero;
