export interface Plan {
  name: string;
  description: string;
  pricePerMonth: number;
  pricePerYear: number;
  features: string[];
  buttonLabel: string;
  isCommingSoon?: boolean;
}
