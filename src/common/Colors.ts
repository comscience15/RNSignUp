export const HexOpacity = (opacity: number): string => {
  if (opacity < 0.0 || opacity > 1.0) {
    throw new Error(`trying to get a hex string for bogus opacity value ${opacity}`);
  }
  const string = Math.round(opacity * 255.0).toString(16);
  if (string.length === 1) {
    return `0${string}`;
  }
  return string;
};

export const PrimaryColors = {
  denim: '#1e70c3',
  sunflower: '#f8b53c',
};

export const NeutralColors = {
  black: '#000000',
  blue: '#2167a6',
  chocolateChip: '#472014',
  darkBlue: '#0000ab',
  darkGray: '#666666',
  denimTint: '#dfeaff',
  downFeather: '#e5e3e1',
  gray: '#999999',
  green: '#3F704D',
  lightGray: '#cccac7',
  quillInk: '#232323',
  slate: '#706e6c',
  slateFeather: '#aba8a3',
  titanium: '#aba8a3',
  white: '#ffffff',
};

export const AccentColors = {
  aubergine: '#ab358d',
  azure: '#3186df',
  chartreuse: '#b6e943',
  leaf: '#89af32',
  mandarin: '#fd7727',
  merlot: '#8a1f64',
  navy: '#0f3861',
  powder: '#6eb5ff',
  scarlet: '#ef3f2a',
  tomato: '#ff6347',
  verdigris: '#1fb9ad',
};

export const MainColors = {
  badge: AccentColors.scarlet,
  cardBackground: NeutralColors.white,
  cardShadow: '#8a8272',
  cellDivider: '#dad2d2',
  dotColor: '#ffffff66',
  fabButton: '#3870BD',
  headerBackground: PrimaryColors.denim,
  scoreBubble: '#f6531c',
  screenBackground: '#e6e5e1',
  statusBar: NeutralColors.quillInk,
  textInputBorder: '#8a8272',
  tileBackground: PrimaryColors.sunflower,
  tileLetter: '#461f13',
};

export const MemoriesColor = {
  nostalgicButtonColor: '#0096df',
  nostalgicCellLeftColor: '#5ab99c',
  nostalgicCellRightColor: '#51b2f8',
  nostalgicCellStripeColor: '#1e5fa0',
  nostalgicDialogBottomColor: '#0db590',
  nostalgicDialogTopColor: '#00abff',
  rivalryButtonColor: '#990DAA',
  rivalryCellLeftColor: '#e86dc9',
  rivalryCellRightColor: '#7d5eef',
  rivalryCellStripeColor: '#531197',
  rivalryDialogBottomColor: '#fb963d',
  rivalryDialogTopColor: '#ad39e0',
};

export const DiscoverColor = {
  discoverBlueGradientBottomColor: '#917ced',
  discoverBlueGradientTopColor: '#22aefb',
  discoverBlueTextColor: '#2fa0f5',
  discoverBlueTintBackgroundImage: '#6b67d4',
  gameModeOrangeGradientBottomColor: '#fa4874',
  gameModeOrangeGradientTopColor: '#ff7538',
  gameModeOrangeTextColor: '#ee497f',
  gameModeOrangeTintBackgroundImage: '#b63b58',
  nonMatchMakingTintBackgroundImage: '#415aa6',
  playNowGreenGradientBottomColor: '#01a4a1',
  playNowGreenGradientTopColor: '#2ecc71',
  playNowGreenTextColor: '#28c084',
  playNowGreenTintBackgroundImage: '#158974',
  shadowDiscoverCell: '#153460',
  socialYellowGradientBottomColor: '#ea9011',
  socialYellowGradientTopColor: '#f0b913',
  socialYellowTextColor: '#eb9013',
  socialYellowTintBackgroundImage: '#b76f10',
};

export const NavBarColors = {
  activeTint: PrimaryColors.denim,
};

export const DividerColors = {
  grey: NeutralColors.downFeather,
  whiteAlpha35: `${NeutralColors.white}35`,
};

export const BackgroundColors = {
  drawerContent: `#342452${HexOpacity(0.7)}`,
  footerColor: '#eceae7',
};

export const InventoryColors = {
  underlayColor: '#f2f2f0',
};