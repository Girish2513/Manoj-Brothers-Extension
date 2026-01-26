import React, { useState, useRef, useEffect, useMemo } from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowUpRight } from 'lucide-react'; // Ensure you have this installed: npm install lucide-react
import './Products.css';

// --- IMPORTS (Kept exactly as you provided) ---
import vinylFlooringImg from '../assets/vinyl-flooring.jpg';
import artificialGrassImg from '../assets/artificial-grass.jpg';
import beigeCarpetImg from '../assets/beige-carpet.jpg';
import pvcRollImg from '../assets/pvc-roll.jpg';
import rubberMatImg from '../assets/rubber-mat.jpg';
import puFoamImg from '../assets/pu-foam.png';
import pvcSheetingImg from '../assets/pvc-sheeting-tubes.png';
import epeFoamsImg from '../assets/epe-foams.png';
import fancyCarpetImg from '../assets/fancy-carpet.png';
import regularCarpetImg from '../assets/regular-carpet.png';
import pvcMembraneNewImg from '../assets/pvc-membrane-new.png';
import waterproofingMembraneImg from '../assets/waerproofing-membrane.png';
import bookBindingCollageImg from '../assets/book-binding-collage.png';
import bookBindingRexineImg from '../assets/book-binding-rexine.png';
import rubberDoormatImg from '../assets/rubber-doormat.png';
import coirDoormatImg from '../assets/coir-doormat.jpg';
import cushionDoormatImg from '../assets/cushion-doormat.png';
import turfDoormatImg from '../assets/turf-doormat.png';
import snakeDoormatImg from '../assets/snake-doormat.png';
import pvcStudFlooringImg from '../assets/pvc-stud-flooring.png';
import pvcAntiStaticImg from '../assets/pvc-anti-static.png';
import yogaMatImg from '../assets/yoga-mat.png';
import speakerFeltImg from '../assets/speaker-felt.png';
import verticalGrassImg from '../assets/vertical-grass.jpg';
import turfSportsGrassImg from '../assets/turf-sports-grass.png';
import wallpapersImg from '../assets/wallpapers.png';
import floorProtectionGuardImg from '../assets/floor-protection-guard.png';
import selfAdhesiveVelcroImg from '../assets/self-adhesive-velcro.png';
import airBubblePackagingImg from '../assets/air-bubble-packaging.png';
import premiumRexineImg from '../assets/premium-rexine-user.png';
import velvetClothImg from '../assets/velvet-cloth.png';
import nurseryGreenNetImg from '../assets/nursery-green-net.jpg';
import cricketNetImg from '../assets/cricket-net.png';
import mosquitoNetImg from '../assets/mosquito-net.png';
import evaFoamImg from '../assets/eva-foam.png';
import verticalBlindsImg from '../assets/vertical-blinds.png';
import rollerBlindsImg from '../assets/roller-blinds.png';
import pvcStripCurtainsImg from '../assets/pvc-strip-curtains.png';
import wallCarpetsImg from '../assets/wall-carpets.png';
import pvcCoatedFabricsImg from '../assets/pvc-coated-fabrics.png';
import allPurposeAdhesivesImg from '../assets/all-purpose-adhesives.png';
import redExhibitionCarpetImg from '../assets/red-exhibition-carpet.png';
import soffitPanelsImg from '../assets/soffit-panels.png';
import rubberHollowMatImg from '../assets/rubber-hollow-mat.png';
import ProductModal from '../components/ProductModal';

// --- DATA (Kept exactly as you provided) ---
const productsData = [
  { id: 1, category: 'flooring', title: 'Water-Resistant PVC Vinyl Flooring', desc: 'Ideal for modern homes and high-traffic commercial areas.', line1: 'Designed to resist moisture, stains, and daily wear.', line2: 'A practical flooring solution that balances durability with style.', img: vinylFlooringImg },
  { id: 2, category: 'speciality', title: 'Premium Artificial Grass (40mm)', desc: 'Lush, low-maintenance green solutions for balconies and gardens.', line1: 'Crafted to closely resemble the look and feel of natural grass.', line2: 'Perfect for outdoor spaces that demand durability with minimal upkeep.', img: artificialGrassImg },
  { id: 3, category: 'furnishing', title: 'Rich Velvet Upholstery Fabric', desc: 'Luxurious and durable fabric for sofas, chairs, and cushions.', line1: 'Offers a soft touch with a rich visual texture.', line2: 'Ideal for interiors that seek elegance and long-lasting comfort.', img: velvetClothImg },
  { id: 4, category: 'flooring', title: 'Red Exhibition Carpet', desc: 'High-quality, vibrant carpets perfect for events and stages.', line1: 'Designed to create a bold visual impact in large venues.', line2: 'Commonly used for exhibitions, functions, and ceremonial setups.', img: redExhibitionCarpetImg },
  { id: 5, category: 'speciality', title: 'PVC Membrane Film', desc: 'Durable and stylish films for modular kitchens and furniture.', line1: 'Provides smooth finishes with excellent surface protection.', line2: 'Widely used in modern interiors for a refined, contemporary look.', img: pvcMembraneNewImg },
  { id: 6, category: 'furnishing', title: 'Designer Wallpaper Rolls', desc: 'A wide variety of patterns and textures to elevate your walls.', line1: 'Carefully curated designs that enhance interior aesthetics.', line2: 'Suitable for residential and commercial decorative applications.', img: wallpapersImg },
  { id: 7, category: 'exterior', title: 'Soffit Panels', desc: 'Durable and aesthetic panels for exterior roofing and siding.', line1: 'Built to withstand weather while maintaining a clean appearance.', line2: 'Ideal for enhancing the exterior finish of modern buildings.', img: soffitPanelsImg },
  { id: 8, category: 'industrial', title: 'PVC Clear Sheeting', desc: 'High-quality PVC sheeting for industrial use.', line1: 'Offers transparency combined with strong protective properties.', line2: 'Commonly used in factories, partitions, and industrial enclosures.', img: pvcSheetingImg },
  { id: 9, category: 'packaging', title: 'EPE Foams', desc: 'Protective EPE foam packaging solutions for various needs.', line1: 'Lightweight material that absorbs shock effectively.', line2: 'Ideal for safeguarding products during transport and storage.', img: epeFoamsImg },
  { id: 10, category: 'flooring', title: 'Fancy Carpet', desc: 'Elegant and luxurious carpets to enhance your interior decor.', line1: 'Features refined textures and premium visual appeal.', line2: 'Best suited for living spaces that demand sophistication.', img: fancyCarpetImg },
  { id: 11, category: 'flooring', title: 'Regular Carpet', desc: 'Durable and practical carpets suitable for everyday use.', line1: 'Designed to handle consistent foot traffic with ease.', line2: 'A reliable flooring choice for homes, offices, and corridors.', img: regularCarpetImg },
  { id: 12, category: 'flooring', title: 'PVC Stud Flooring', desc: 'Anti-slip stud flooring perfect for gyms and heavy-traffic areas.', line1: 'Provides enhanced grip and surface stability.', line2: 'Commonly installed in fitness centers and industrial walkways.', img: pvcStudFlooringImg },
  { id: 13, category: 'flooring', title: 'PVC Anti Static Flooring', desc: 'Specialized flooring for server rooms and hospitals.', line1: 'Helps reduce static electricity build-up.', line2: 'Essential for environments with sensitive electronic equipment.', img: pvcAntiStaticImg },
  { id: 14, category: 'flooring', title: 'Rubber Gym Tiles', desc: 'Heavy-duty interlocking rubber tiles for gym floors.', line1: 'Designed to absorb shock and reduce impact.', line2: 'Ideal for workout zones, training areas, and fitness studios.', img: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2070' },
  { id: 15, category: 'doormats', title: 'Cushion Doormat', desc: 'Soft and absorbent mats for home entrances.', line1: 'Provides comfort underfoot while trapping dust and moisture.', line2: 'Suitable for residential entryways and indoor use.', img: cushionDoormatImg },
  { id: 16, category: 'doormats', title: 'Turf Doormats', desc: 'Artificial grass texture doormats for a natural look.', line1: 'Mimics outdoor grass while remaining easy to clean.', line2: 'Ideal for balconies, patios, and exterior entrances.', img: turfDoormatImg },
  { id: 17, category: 'doormats', title: 'Snake Doormats', desc: 'Open-grid design for effective dirt scraping and drainage.', line1: 'Allows water and debris to pass through easily.', line2: 'Commonly used in high-traffic commercial and outdoor areas.', img: snakeDoormatImg },
  { id: 18, category: 'speciality', title: 'Yoga Mats', desc: 'Non-slip, comfortable mats for yoga and exercise.', line1: 'Provides balanced cushioning and surface grip.', line2: 'Suitable for home workouts, studios, and fitness routines.', img: yogaMatImg },
  { id: 19, category: 'packaging', title: 'Book Binding Rexine Cloth', desc: 'High-quality rexine for book binding and crafts.', line1: 'Offers a smooth finish with good durability.', line2: 'Commonly used in professional binding and stationery work.', img: bookBindingRexineImg },
  { id: 20, category: 'packaging', title: 'Book Binding Paper', desc: 'Premium Indian and imported paper for binding.', line1: 'Ensures strength and longevity of bound materials.', line2: 'Widely used for notebooks, registers, and printed documents.', img: bookBindingCollageImg },
  { id: 21, category: 'packaging', title: 'Air Bubble Packaging', desc: 'Protective wrap for safe shipping and storage.', line1: 'Designed to absorb impact and prevent damage.', line2: 'Ideal for fragile items during transport and handling.', img: airBubblePackagingImg },
  { id: 22, category: 'speciality', title: 'Vertical Garden Grass', desc: 'Realistic vertical grass panels for wall decor.', line1: 'Adds greenery without the need for maintenance.', line2: 'Perfect for feature walls in homes and commercial spaces.', img: verticalGrassImg },
  { id: 23, category: 'speciality', title: 'Turf Sports Grass', desc: 'High-performance artificial turf for sports fields.', line1: 'Engineered for consistent performance and durability.', line2: 'Suitable for training grounds and recreational sports areas.', img: turfSportsGrassImg },
  { id: 24, category: 'speciality', title: 'Speaker Felt', desc: 'Acoustic transparency fabric for speakers.', line1: 'Allows sound to pass through without distortion.', line2: 'Used in speaker cabinets and acoustic panel applications.', img: speakerFeltImg },
  { id: 25, category: 'industrial', title: 'Floor Protection Guards', desc: 'Pads and guards to protect floors from furniture scratches.', line1: 'Prevents surface damage during daily use.', line2: 'Ideal for homes, offices, and commercial interiors.', img: floorProtectionGuardImg },
  { id: 26, category: 'industrial', title: 'Self-Adhesive Velcro Tape', desc: 'Strong hook and loop fasteners for multiple uses.', line1: 'Easy to apply with reliable holding strength.', line2: 'Suitable for organization, mounting, and temporary fixing.', img: selfAdhesiveVelcroImg },
  { id: 27, category: 'furnishing', title: 'Premium Upholstery Rexine', desc: 'Durable and stylish leatherette for furniture like sofas and chairs.', line1: 'Provides a leather-like appearance with easy maintenance.', line2: 'Commonly used in residential and commercial furniture.', img: premiumRexineImg },
  { id: 28, category: 'furnishing', title: 'Vertical Blinds', desc: 'Elegant vertical blinds for office and home windows.', line1: 'Offers smooth light control and privacy.', line2: 'Well-suited for large windows and sliding doors.', img: verticalBlindsImg },
  { id: 29, category: 'furnishing', title: 'Roller Blinds', desc: 'Sleek and modern roller blinds for light control.', line1: 'Minimal design that complements contemporary interiors.', line2: 'Ideal for both residential and office environments.', img: rollerBlindsImg },
  { id: 30, category: 'furnishing', title: 'Wall Carpets', desc: 'Decorative wall-to-wall carpeting for luxurious interiors.', line1: 'Adds warmth and texture to interior spaces.', line2: 'Commonly used in premium residential and hospitality projects.', img: wallCarpetsImg },
  { id: 31, category: 'furnishing', title: 'PVC Coated Fabrics', desc: 'Waterproof and durable fabrics for various covering needs.', line1: 'Designed to resist moisture and wear.', line2: 'Suitable for outdoor furniture and protective covers.', img: pvcCoatedFabricsImg },
  { id: 32, category: 'nets', title: 'Nursery Green Net', desc: 'Shade nets for nurseries and gardens to protect plants.', line1: 'Controls sunlight exposure for healthier growth.', line2: 'Ideal for agricultural and landscaping applications.', img: nurseryGreenNetImg },
  { id: 33, category: 'nets', title: 'Cricket Practice Net', desc: 'High-quality nets for sports practice and safety.', line1: 'Built to withstand repeated impact from balls.', line2: 'Suitable for training grounds and sports academies.', img: cricketNetImg },
  { id: 34, category: 'nets', title: 'Mosquito Protection Net', desc: 'Effective netting to keep interiors mosquito-free.', line1: 'Allows airflow while blocking insects.', line2: 'Commonly installed in homes, hospitals, and offices.', img: mosquitoNetImg },
  { id: 35, category: 'flooring', title: 'EVA School Foam Mats', desc: 'Colorful and safe interlocking foam mats for kids and schools.', line1: 'Soft surface designed to reduce impact injuries.', line2: 'Ideal for classrooms, play areas, and daycare centers.', img: evaFoamImg },
  { id: 36, category: 'doormats', title: 'Rubber Hollow Doormats', desc: 'Durable rubber mats with drainage holes for entrances.', line1: 'Allows water and dirt to drain efficiently.', line2: 'Suitable for outdoor and high-traffic entry points.', img: rubberHollowMatImg },
  { id: 37, category: 'industrial', title: 'PVC Strip Curtains', desc: 'Transparent industrial curtains for temperature and dust control.', line1: 'Helps maintain internal environments efficiently.', line2: 'Commonly used in factories, cold storage, and warehouses.', img: pvcStripCurtainsImg },
  { id: 38, category: 'industrial', title: 'All Purpose Adhesives', desc: 'Strong bonding solutions for various materials.', line1: 'Designed for reliable adhesion across surfaces.', line2: 'Used in construction, furnishing, and repair works.', img: allPurposeAdhesivesImg },
  { id: 39, category: 'speciality', title: 'Self-adhesive Waterproofing Membrane', desc: 'High-quality waterproofing solution for roofs and foundations.', line1: 'Peel-and-stick application ensures easy installation.', line2: 'Protects structures from long-term water damage.', img: waterproofingMembraneImg },
  { id: 40, category: 'doormats', title: 'Rubber Doormat', desc: 'Classic rubber doormat for superior dirt removal.', line1: 'Designed for strength and long-lasting performance.', line2: 'Ideal for residential and commercial entrances.', img: rubberDoormatImg },
  { id: 41, category: 'doormats', title: 'Coir Doormat', desc: 'Natural coir fiber doormat with decorative patterns.', line1: 'Eco-friendly fibers effectively scrape dirt and dust.', line2: 'Perfect for traditional and modern home entrances.', img: coirDoormatImg }
];

// --- NEW COMPONENT: Spotlight Product Card ---
const ProductCard = ({ product, style, onOpenModal }) => {
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    card.style.setProperty('--mouse-x', `${x}px`);
    card.style.setProperty('--mouse-y', `${y}px`);
  };

  return (
    <div
      className="product-card"
      ref={cardRef}
      onMouseMove={handleMouseMove}
      style={style}
      onClick={() => onOpenModal(product)}
    >
      {/* Spotlight Overlay */}
      <div className="spotlight-overlay"></div>

      {/* Image Section */}
      <div className="product-image-wrapper">
        <img src={product.img} alt={product.title} className="product-image" loading="lazy" decoding="async" />

        {/* Hover Overlay with Button */}
        <div className="product-overlay">
          <button className="view-btn">
            View Details <ArrowUpRight size={18} />
          </button>
        </div>
      </div>

      {/* Info Section */}
      <div className="product-info">
        <span className="product-category">{product.category}</span>
        <h3 className="product-name">{product.title}</h3>
        <p className="product-desc-short">{product.desc}</p>

        <div className="card-footer-visual">
          <span className="learn-more-link">Learn More &rarr;</span>
        </div>
      </div>
    </div>
  );
};

// --- MAIN PAGE COMPONENT ---
const Products = () => {
  const [filter, setFilter] = useState('all');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isVisible, setIsVisible] = useState(false); // For scroll reveal

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const filteredProducts = useMemo(() => (
    productsData.filter(product => filter === 'all' || product.category === filter)
  ), [filter]);

  const categories = [
    { id: 'all', label: 'All Products' },
    { id: 'flooring', label: 'Flooring' },
    { id: 'furnishing', label: 'Furnishing' },
    { id: 'industrial', label: 'Industrial' },
    { id: 'speciality', label: 'Speciality' },
    { id: 'packaging', label: 'Packaging' },
    { id: 'doormats', label: 'Doormats' },
    { id: 'nets', label: 'Nets' },
    { id: 'exterior', label: 'Exterior' },
  ];

  return (
    <div className="products-page">
      <Helmet>
        <title>Our Products | Manoj Brothers Extension</title>
        <meta name="description" content="Browse our wide range of Vinyl Flooring, Artificial Grass, Carpets, and more." />
      </Helmet>

      {/* Hero Section */}
      <section className="products-hero">
        <div className="hero-content">
          <h1 className="hero-title">Our Curated Collection</h1>
          <p className="hero-subtitle">
            Explore our extensive range of high-quality flooring, furnishing, and industrial materials.
            From luxury vinyl planks to durable artificial grass, we provide premium solutions
            for homes, offices, and commercial spaces at unmatched wholesale prices.
          </p>

          <div className="hero-stats">
            <div className="stat-item">
              <span className="stat-value">500+</span>
              <span className="stat-label">Products</span>
            </div>
            <div className="stat-separator"></div>
            <div className="stat-item">
              <span className="stat-value">Wholesale</span>
              <span className="stat-label">Pricing</span>
            </div>
            <div className="stat-separator"></div>
            <div className="stat-item">
              <span className="stat-value">Premium</span>
              <span className="stat-label">Quality</span>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="filter-section">
        <div className="filter-container">
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id)}
              className={`filter-btn ${filter === cat.id ? 'active' : ''}`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </section>

      {/* Product Grid */}
      <section className="products-grid-section">
        <div className={`products-grid ${isVisible ? 'visible' : ''}`}>
          {filteredProducts.map((product, index) => (
            <ProductCard
              key={product.id}
              product={product}
              onOpenModal={setSelectedProduct}
              // Simple staggered animation logic
              style={{ animationDelay: `${index * 50}ms` }}
            />
          ))}
        </div>
      </section>

      {/* Product Modal */}
      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </div>
  );
};

export default Products;