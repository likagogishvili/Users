interface User {
  name: string;
  email: string;
  gender: string;
  address: { street: string; city: string };
  phone: string;
}

interface Users {
  id: number;
  name: string;
  email: string;
  gender: string;
  adress: {
    street: string;
    city: string;
  };
  phone: string;
}
export type { User, Users };
