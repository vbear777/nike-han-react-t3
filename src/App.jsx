import { Hero, CustomerReviews, Footer, PopularProducts, Services, SpecialOffer, Subscribe, SuperQuality } from "./sections";
import Nav from "./components/Nav";

const App = () => {
return (
  <main className="relative">
    <Nav />
    <section className="xl:padding-1 wide:padding-r padding-b">
      <Hero />
    </section>
    <section className="padding">
      <PopularProducts />
    </section>
    <section className="padding">
      <SuperQuality />
    </section>
    <section className="padding-x py-10">
      <Services />
    </section>
    <section className="padding">
      <SpecialOffer />
    </section>
    <section className="bg-transparent-purple padding">
      <CustomerReviews />
    </section>
    <section className="padding-x sm:py-32 py-16 w-full">
      <Subscribe />
    </section>
    <section className="bg-midnight padding-x padding-t pb-8 padding">
      <Footer />
    </section>
  </main>
  )
}

export default App;