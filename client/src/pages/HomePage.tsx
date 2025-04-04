import { Fragment } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ProductCategories from "@/components/ProductCategories";
import FeaturedProducts from "@/components/FeaturedProducts";
import AboutNatura from "@/components/AboutNatura";
import NaturalIngredients from "@/components/NaturalIngredients";
import Testimonials from "@/components/Testimonials";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export default function HomePage() {
  return (
    <Fragment>
      <Header />
      <HeroSection />
      <ProductCategories />
      <FeaturedProducts />
      <AboutNatura />
      <NaturalIngredients />
      <Testimonials />
      <ContactSection />
      <Footer />
      <FloatingWhatsApp />
    </Fragment>
  );
}
