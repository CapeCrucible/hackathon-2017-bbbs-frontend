export const environment: EnvironmentConfig = {
  production: true,
  apiUrl: 'http://bbbsapi.capecrucible.org/api/'
};

export interface EnvironmentConfig {
  production: boolean;
  apiUrl: string;
}
