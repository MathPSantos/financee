export interface Plan {
  name: string;
  description: string;
  price: number;
  features: string[];
  buttonLabel: string;
  isCommingSoon?: boolean;
}
