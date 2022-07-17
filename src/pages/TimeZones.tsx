import { Layout } from "../components/Layout";
import { Container as Timezones } from "../timezones/Timezones";

export const TimeZonesPage: React.FC = () => {
  return (
    <Layout title="timezones">
      <Timezones />
    </Layout>
  );
};
