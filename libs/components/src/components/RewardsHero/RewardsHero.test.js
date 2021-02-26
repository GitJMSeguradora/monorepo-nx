import React from "react";
import { fireEvent } from '@testing-library/react';

import { render, waitForElement } from "_/config/tests";
import { GTMServices } from '@monorepo-nx/services/gtm';

import RewardsHero from "./RewardsHero";

describe("RewardsHero", () => {
  it("Should render RewardsHero component", async () => {
    render(<RewardsHero />);
  });

  it("Should download the link", () => {
    const { getByTestId } = render(<RewardsHero />);
    const btn = await waitForElement(() =>
      getByTestId('btn-accept-term-error')
    );

    fireEvent.click(btn);

    expect(GTMServices).toHaveBeenCalledTimes(1);
  })
});
