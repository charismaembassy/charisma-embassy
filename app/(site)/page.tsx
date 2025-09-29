import ComingSoon from "@/components/ComingSoon";
import Guided from "@/components/Guided";
import BigHero from "@/components/hero/BigHero";
import Lead from "@/components/Lead";



export default function Home() {

  return (
    <div>
      <BigHero />
      <Lead />
      <ComingSoon />
      <Guided />
    </div>
  );
}
