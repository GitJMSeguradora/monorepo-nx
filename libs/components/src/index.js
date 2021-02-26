import moment from "moment";
import "moment/locale/pt-br";
moment.locale("pt-br");

export { default as EmptyState } from "./components/EmptyState";
export { default as SearchNotFound } from "./components/SearchNotFound";
export { default as MenuMore } from "./components/MenuMore";
export * from "./components/MenuMore";
export { default as ModalOption } from "./components/ModalOption";
export { default as Pagination } from "./components/Pagination";

export { default as PageContainer } from "./components/PageContainer";
export { default as PageWrapper } from "./components/PageWrapper";
export { default as Snackbar } from "./components/Snackbar";
export * from "./components/Skeletons";
export { default as Typography } from "./components/Typography";
export { default as GradientButton } from "./components/GradientButton";

// icons
export * from "./components/Icons";

// styles
export { default as GlobalStyleLegacy } from "./styles/global.legacy"; // antigo design system
export { default as GlobalStyle } from "./styles/global"; // novo design system
export { default as colors } from "./styles/colors";
export { palette } from "./styles/colors";
export { default as fonts } from "./styles/fonts";
export { default as createTheme } from "./styles/createTheme";
export { default as tokens } from "./styles/tokens";

// new
export { default as NavigationMenu } from "./components/NavigationMenu";
export { default as AppBarSearch } from "./components/AppBarSearch";
export { default as TagButton } from "./components/TagButton";
export { default as MultiSelect } from "./components/MultiSelect";
export { default as RewardsHero } from "./components/RewardsHero";
export { default as Card } from "./components/Card";
export { default as Cards } from "./components/Cards";
export { default as Tag } from "./components/Tag";