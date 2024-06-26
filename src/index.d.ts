import * as React from 'react';

type DefaultTheme = object | null;

type WithThemeFactory<Theme> = <
    InnerProps extends { theme: NonNullable<Theme> },
    InnerComponent extends React.ComponentType<InnerProps>,
    OuterProps extends InnerProps & { theme?: NonNullable<Theme> },
>(comp: InnerComponent) => React.ComponentType<OuterProps>;

interface ThemeProviderProps<Theme> {
    theme: NonNullable<Theme> | ((outerTheme: Theme) => NonNullable<Theme>),
    children: React.ReactNode,
}

type ThemeProviderFactory<Theme> = React.ComponentType<ThemeProviderProps<Theme>>;

interface Theming<Theme> {
    context: React.Context<Theme>,
    withTheme: WithThemeFactory<Theme>,
    ThemeProvider: ThemeProviderFactory<Theme>,
}

declare function createTheming<Theme>(context: React.Context<Theme>): Theming<Theme>;

declare const withTheme: WithThemeFactory<DefaultTheme>;
declare const ThemeProvider: ThemeProviderFactory<DefaultTheme>;
declare const ThemeContext: React.Context<DefaultTheme>;

export {
    ThemeContext,
    createTheming,
    withTheme,
    ThemeProvider,
    ThemeProviderProps,
    Theming,
}