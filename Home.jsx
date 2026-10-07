import WelcomeSection from "../components/Welcomesection";
import FeatureSection from "../components/Featuresection";

function Home() {
  return (
    <main className="min-h-screen bg-gray-100 px-4 py-8 sm:px-6 sm:py-10">
      <div className="mx-auto max-w-7xl">
        <WelcomeSection />
        <FeatureSection />
      </div>
    </main>
  );
}

export default Home;
