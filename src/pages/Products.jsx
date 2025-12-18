// src/pages/Products.jsx
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import './Products.css';
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
import ProductModal from '../components/ProductModal';

const productsData = [
  { id: 1, category: 'flooring', title: 'Water-Resistant PVC Vinyl Flooring', desc: 'Ideal for modern homes and high-traffic commercial areas.', img: vinylFlooringImg },
  { id: 2, category: 'speciality', title: 'Premium Artificial Grass (40mm)', desc: 'Lush, low-maintenance green solutions for balconies and gardens.', img: artificialGrassImg },
  { id: 3, category: 'furnishing', title: 'Rich Velvet Upholstery Fabric', desc: 'Luxurious and durable fabric for sofas, chairs, and cushions.', img: velvetClothImg },
  { id: 4, category: 'industrial', title: 'Rubber Hollow Doormats', desc: 'Durable rubber mats for industrial and safety applications.', img: rubberMatImg },
  { id: 5, category: 'flooring', title: 'Red Exhibition Carpet', desc: 'High-quality, vibrant carpets perfect for events and stages.', img: redExhibitionCarpetImg },
  { id: 6, category: 'speciality', title: 'PVC Membrane Film', desc: 'Durable and stylish films for modular kitchens and furniture.', img: pvcMembraneNewImg },
  { id: 7, category: 'furnishing', title: 'Designer Wallpaper Rolls', desc: 'A wide variety of patterns and textures to elevate your walls.', img: wallpapersImg },

  { id: 9, category: 'industrial', title: 'PVC Clear Sheeting', desc: 'High-quality PVC sheeting for industrial use.', img: pvcSheetingImg },
  { id: 10, category: 'packaging', title: 'EPE Foams', desc: 'Protective EPE foam packaging solutions for various needs.', img: epeFoamsImg },

  // New Products
  // New Products
  { id: 11, category: 'flooring', title: 'Fancy Carpet', desc: 'Elegant and luxurious carpets to enhance your interior decor.', img: fancyCarpetImg },
  { id: 41, category: 'speciality', title: 'Self-adhesive Waterproofing Membrane', desc: 'High-quality waterproofing solution for roofs and foundations.', img: waterproofingMembraneImg },
  { id: 40, category: 'flooring', title: 'Regular Carpet', desc: 'Durable and practical carpets suitable for everyday use.', img: regularCarpetImg },
  { id: 12, category: 'flooring', title: 'PVC Stud Flooring', desc: 'Anti-slip stud flooring perfect for gyms and heavy-traffic areas.', img: pvcStudFlooringImg },
  { id: 13, category: 'flooring', title: 'PVC Anti Static Flooring', desc: 'Specialized flooring for server rooms and hospitals.', img: pvcAntiStaticImg },
  { id: 14, category: 'speciality', title: 'Rubber Gym Tiles', desc: 'Heavy-duty interlocking rubber tiles for gym floors.', img: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2070' },
  { id: 15, category: 'doormats', title: 'Cushion Doormat', desc: 'Soft and absorbent mats for home entrances.', img: cushionDoormatImg },
  { id: 16, category: 'doormats', title: 'Turf Doormats', desc: 'Artificial grass texture doormats for a natural look.', img: turfDoormatImg },
  { id: 17, category: 'doormats', title: 'Snake Doormats', desc: 'Open-grid design for effective dirt scraping and drainage.', img: snakeDoormatImg },
  { id: 18, category: 'speciality', title: 'Yoga Mats', desc: 'Non-slip, comfortable mats for yoga and exercise.', img: yogaMatImg },
  { id: 19, category: 'packaging', title: 'Book Binding Rexine Cloth', desc: 'High-quality rexine for book binding and crafts.', img: bookBindingRexineImg },
  { id: 20, category: 'packaging', title: 'Book Binding Paper', desc: 'Premium Indian and imported paper for binding.', img: bookBindingCollageImg },
  { id: 21, category: 'packaging', title: 'Air Bubble Packaging', desc: 'Protective wrap for safe shipping and storage.', img: airBubblePackagingImg },
  { id: 22, category: 'speciality', title: 'Vertical Garden Grass', desc: 'Realistic vertical grass panels for wall decor.', img: verticalGrassImg },
  { id: 23, category: 'speciality', title: 'Turf Sports Grass', desc: 'High-performance artificial turf for sports fields.', img: turfSportsGrassImg },
  { id: 24, category: 'flooring', title: 'Speaker Felt', desc: 'Acoustic transparency fabric for speakers.', img: speakerFeltImg },
  { id: 25, category: 'industrial', title: 'Floor Protection Guards', desc: 'Pads and guards to protect floors from furniture scratches.', img: floorProtectionGuardImg },
  { id: 26, category: 'industrial', title: 'Self-Adhesive Velcro Tape', desc: 'Strong hook and loop fasteners for multiple uses.', img: selfAdhesiveVelcroImg },
  { id: 27, category: 'furnishing', title: 'Premium Upholstery Rexine', desc: 'Durable and stylish leatherette for furniture like sofas and chairs.', img: premiumRexineImg },
  { id: 28, category: 'furnishing', title: 'Vertical Blinds', desc: 'Elegant vertical blinds for office and home windows.', img: verticalBlindsImg },
  { id: 29, category: 'furnishing', title: 'Roller Blinds', desc: 'Sleek and modern roller blinds for light control.', img: rollerBlindsImg },
  { id: 30, category: 'furnishing', title: 'Wall Carpets', desc: 'Decorative wall-to-wall carpeting for luxurious interiors.', img: wallCarpetsImg },
  { id: 31, category: 'furnishing', title: 'PVC Coated Fabrics', desc: 'Waterproof and durable fabrics for various covering needs.', img: pvcCoatedFabricsImg },
  { id: 32, category: 'nets', title: 'Nursery Green Net', desc: 'Shade nets for nurseries and gardens to protect plants.', img: nurseryGreenNetImg },
  { id: 33, category: 'nets', title: 'Cricket Practice Net', desc: 'High-quality nets for sports practice and safety.', img: cricketNetImg },
  { id: 34, category: 'nets', title: 'Mosquito Protection Net', desc: 'Effective netting to keep interiors mosquito-free.', img: mosquitoNetImg },
  { id: 35, category: 'flooring', title: 'EVA School Foam Mats', desc: 'Colorful and safe interlocking foam mats for kids and schools.', img: evaFoamImg },
  { id: 36, category: 'doormats', title: 'Rubber Hollow Doormats', desc: 'Durable rubber mats with drainage holes for entrances.', img: 'https://images.unsplash.com/photo-1616401784845-180882ba9ba8?q=80&w=2070' },
  { id: 37, category: 'industrial', title: 'PVC Strip Curtains', desc: 'Transparent industrial curtains for temperature and dust control.', img: pvcStripCurtainsImg },
  { id: 38, category: 'industrial', title: 'All Purpose Adhesives', desc: 'Strong bonding solutions for various materials.', img: allPurposeAdhesivesImg },

  { id: 42, category: 'doormats', title: 'Rubber Doormat', desc: 'Classic rubber doormat for superior dirt removal.', img: rubberDoormatImg },
  { id: 43, category: 'doormats', title: 'Coir Doormat', desc: 'Natural coir fiber doormat with decorative patterns.', img: coirDoormatImg },
];

const Products = () => {
  const [filter, setFilter] = useState('all');
  const [selectedProduct, setSelectedProduct] = useState(null);

  const filteredProducts = productsData.filter(product =>
    filter === 'all' || product.category === filter
  );

  const categories = [
    { id: 'all', label: 'All Products' },
    { id: 'flooring', label: 'Flooring' },
    { id: 'furnishing', label: 'Furnishing' },
    { id: 'industrial', label: 'Industrial' },
    { id: 'speciality', label: 'Speciality' },
    { id: 'packaging', label: 'Packaging' },
    { id: 'doormats', label: 'Doormats' },
    { id: 'nets', label: 'Nets' },
  ];

  return (
    <div className="products-page">
      <Helmet>
        <title>Our Products | Manoj Brothers Extension</title>
        <meta name="description" content="Browse our wide range of Vinyl Flooring, Artificial Grass, Carpets, and more. High-quality materials for every need." />
      </Helmet>
      {/* Hero Section */}
      <section className="products-hero">
        <div className="hero-content">
          <h1 className="hero-title">Our Curated Collection</h1>
          <p className="hero-subtitle">Discover premium materials engineered for excellence. From industrial strength to residential luxury.</p>
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
        <div className="card-grid">
          {filteredProducts.map((product, index) => (
            <div
              key={product.id}
              className="product-card-wrapper"
              style={{ animationDelay: `${index * 0.1}s` }} /* Staggered animation */
            >
              <div className="product-card" onClick={() => setSelectedProduct(product)}>
                <div className="card-image-container">
                  <img src={product.img} alt={product.title} className="card-img" />
                </div>
                <div className="card-body">
                  <span className="card-category">{product.category}</span>
                  <h3 className="card-title">{product.title}</h3>
                  <p className="card-desc">{product.desc}</p>
                  <div className="card-footer">
                    <span className="learn-more">Learn More <span>&rarr;</span></span>
                  </div>
                </div>
              </div>
            </div>
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