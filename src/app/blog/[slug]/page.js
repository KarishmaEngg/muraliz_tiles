"use client";
import { useParams } from 'next/navigation';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaPinterestP } from 'react-icons/fa';
import BlogSection from '@/components/BlogSection';
import Footer from '@/components/Footer';

// ✅ FULL BLOG DATA (HAR BLOG KA ALAG CONTENT)
const blogContent = {
  "How-to-Select-Tiles-for-The-Living-Room": {
    date: "02 July, 2022",
    image: "/select-tiles.webp",
    content: (
      <>
        <p>
          When you select tiles for the living room, there are many popular options. Porcelain and ceramic tiles are popular choices due to their durability, low maintenance, and versatility in design. Natural stone tiles, such as marble and travertine, add a touch of opulence to a living room. Hardwood or wood-look tiles can create a cosy and inviting atmosphere. The best types of tiles for a living room are highly subjective to your personal preferences. However, from a sustainable, durable and cost-effective point of view, ceramic tiles or porcelain tiles might be most suitable. They come in many designs in a multitude of cost brackets. One can get glazed ceramic tiles for a polished look, and unglazed give a matte look to your tiles. 
          However, if your goal is absolute luxury, natural stone tiles like slate, marble, etc, are a great choice to select tiles for the living room.
        </p>

        <p>
          The look and feel they give your living room cannot be conveyed through ceramic and porcelain tiles. They may be more susceptible to scratches and staining, but with regular professional maintenance, they won't pose an issue. 
          Natural stone tiles are also unique in pattern, giving your living room an organic luxury feel.
        </p>

        <h2 className="text-xl font-semibold mt-6">What is the best colour for living room tiles?</h2>
        <p>
          Living room tiles come in many colours; most people choose light colours soothing to the eyes, like cream, white, beige, or light grey.
        </p>

        <h2 className="text-xl font-semibold mt-6">What should be the size of my living room tiles?</h2>
        <p>
          The size of living room tiles is more important than you think.
        </p>

        <h2 className="text-xl font-semibold mt-6">What is the best material for living room tiles?</h2>
        <p>
          Porcelain tiles are durable and water-resistant, while ceramic tiles are affordable and versatile.
        </p>

        {/* ✅ NEW SECTION (IMAGE WALA) */}
        <h2 className="text-xl font-semibold mt-10 uppercase">
          WHAT IS THE BEST MATERIAL FOR LIVING ROOM TILES?
        </h2>

        <p className="mt-2">
          The material you choose should complement the interior of your living room and reflect your lifestyle and functional needs. Porcelain tiles are a great choice for high-traffic living rooms due to their durability and water resistance. Ceramic tiles are more affordable and come in a wide variety of designs, making them suitable for most living rooms. Natural stone tiles like marble and travertine add a luxurious touch but require more maintenance. Ultimately, the best material for living room tiles depends on your personal preferences, budget, and the overall aesthetic you want to achieve in your living space. 

        </p>

        <h3 className="mt-6 font-semibold">1. Porcelain Tiles:</h3>
        <p>
          Porcelain tiles are usually more expensive than ceramic tiles, but they have lower porosity, making them more water-resistant and durable. They can mimic other materials like wood and marble beautifully.

        </p>

        <h3 className="mt-6 font-semibold">2. Ceramic Tiles:</h3>
        <p>
          Ceramic tiles are the most popular option in the tile market because they offer a diverse variety at relatively affordable pricing.
        </p>

        <h3 className="mt-6 font-semibold">3. Natural Stone:</h3>
        <p>
          Elegant natural stones like marble, travertine, slate, and granite are great for luxurious updated flooring.
        </p>

        <h3 className="mt-6 font-semibold">4. Mosaic Tiles:</h3>
        <p>
          Tiny mosaic tiles allow for wonderfully designer tile patterns when configured in meshes or sheets.
        </p>

        <h2 className="text-xl font-semibold mt-10 uppercase">
          WHAT ARE THE TRENDS IN LIVING ROOM TILES?
        </h2>

        <p>
          In terms of living room tiles, some current trends include large-format tiles because they make the room look larger and more welcoming.
        </p>
         
      </>
    )
  },

  "innovative-natural-stone-flooring-ideas-for-contemporary-living-spaces": {
    date: "26 October, 2024",
    image: "/innovative.jpg",
    content: (
      <>
        <p>
          The foundation of contemporary interior design lies in integrating functionality and aesthetics. Within this context, the choice of flooring plays an important role in shaping the aesthetics and atmosphere of living spaces.Natural stone tiles, with its timeless elegance and durability, emerges as a versatile option for flooring. Each stone variety becomes a unique canvas for innovative design, blending tradition with contemporary flair.
           From classic marble to rough slates, Karishma Tiles offers natural stone flooring options that elevate your home to an artful expression of style and substance. In this article, we explore the various ways in which natural stone flooring can be infused in modern living spaces with sophistication, functionality, and a touch of luxury.
        </p>
        <p>
          Geometric Elegance with Marble Mosaics : Marble, a symbol of luxury, transforms the art of mosaics. Intricate patterns and geometric designs crafted from marble tiles redefine the typical expectations of stone flooring. Whether employed in herringbone patterns or hexagonal arrangements marble mosaics bring a sense of elegance to contemporary living spaces. The contrasting colours or the interplay of polished finishes adds depth and visual interest to the floor. This innovative use of marble as natural stone flooring introduces timeless aesthetics and becomes a statement piece within modern interiors.
        </p>
        <p>
          Embracing Simplicity with Limestone : Limestone, appreciated for its understated charm, finds a place in contemporary design through a focus on simplicity. Limestone tiles, characterised by their neutral tones and soft textures, create a serene and uncluttered appeal, suitable for modern living spaces. The beauty of limestone lies in its ability to exude warmth without overwhelming the visual language of the interiors. The oversized limestone tile comes with minimal grout lines and promotes a luxurious appearance. This approach to limestone as natural stone flooring aligns with modern design principles and fosters a sense of tranquillity within the living space.
        </p>
        <p>
          High-Contrast Drama with Granite : Granite is known for its durability and variant patterns, providing a medium for contrasting drama in contemporary living spaces. Designers explore the variety of light and dark granite tiles to create striking patterns and visual interest. With their polished surfaces and bold veining, granite tiles for Natural stone flooring contribute to crafting a luxurious appeal. The interplay of different tones within the granite flooring becomes a design feature, adding a touch of sophistication to the living space. Granite floors elevate beyond utilitarian natural stone flooring, transforming into an element of contemporary design.
        </p>
        <p>
          Rough Charm of Slate : Slate, known for its roughness and organic charm introduces a range of grey hues to interior design. From deep to muted tones, slate tiles offer a sense of natural sophistication. The irregular textures and layers in slate create a visual appeal, making it a favourite for those seeking a unique and distinctive natural stone flooring option. Innovative patterns can be achieved by playing with the irregular shapes and sizes of slate tiles—this versatility of slate bridges the gap between modern aesthetics and the raw beauty of nature.
        </p>
        <p>
          At Karishma Tiles and Stones, we promote the innovative use of natural stone flooring in modern living spaces, shaping floors into a work of art that elevates the aesthetic appeal and functionality of the entire space. As homeowners continue to explore the potential of natural stone, the fusion of tradition and innovation unfolds, creating timeless living environments.
        </p>
      </>
    )
  },

  "enhancing-interior-spaces-with-natural-stone-wall": {
    date: "12 Dec, 2023",
    image: "/enhancing.jpg",
    content: (
      <>
        <p>
          The utilisation of natural stone wall cladding tiles in interior design stands as a testament to timeless elegance. These magnificent tiles not only add a touch of sophistication but also offer an array of benefits that elevate the ambience of any space. Let’s delve into the captivating world of natural stone wall cladding tiles and uncover the reasons behind their enduring popularity.
  </p>
  <p>
    Versatility : Natural stone wall cladding tiles are a versatile option for enhancing the visual appeal of both interior and exterior walls. From rustic charm to contemporary chic, these tiles seamlessly blend with various design styles, allowing for endless creativity in décor. Their versatility extends to different types of stone, including slate, marble, limestone, and granite, offering a wide range of textures, colors, and patterns to suit diverse preferences. From rustic charm to contemporary elegance, the exclusive collection offered by Karishma Tiles, caters to varied aesthetic preferences, ensuring a perfect fit for every space.
  </p>
  <p>
    Durability and Longevity : One of the most compelling reasons to opt for natural stone wall cladding tiles is their exceptional durability. These tiles are crafted from authentic, robust materials that withstand the test of time, making them a long-term investment for any space. Their resilience against wear, tear, and environmental factors ensures that the walls maintain their allure for years to come, requiring minimal maintenance.
  </p>
  <p>
    Timeless Aesthetic Appeal : The inherent beauty of natural stone lies in its unique patterns, textures, and colours, which lend an unparalleled aesthetic appeal. Whether it’s the rugged charm of slate or the opulent allure of marble, each type of stone exudes a distinct and timeless elegance. The earthy tones and organic feel of these tiles create a sense of warmth and sophistication, adding character to any setting. Crafted from the finest quality materials, Karishma Tiles' natural stone wall cladding tiles boast exceptional durability, serving as a long-term investment for home interiors.
  </p>
  <p>
    
Eco-Friendly Choice : Choosing natural stone wall cladding tiles also aligns with sustainable design practices. At Karishma Tiles, we prioritize sustainability. Our natural stone wall cladding tiles are eco-conscious options, sourced from natural materials with minimal environmental impact. Moreover, their longevity and recyclability contribute to reducing waste, making them an eco-conscious choice for conscientious designers and homeowners.
  </p>
  <p>
    Thermal Insulation and Energy Efficiency : Beyond their aesthetic prowess, natural stone wall cladding tiles offer practical benefits such as thermal insulation. These tiles possess natural insulating properties, helping to regulate indoor temperatures and contribute to energy efficiency. By providing a buffer against heat transfer, they assist in maintaining comfortable interiors throughout the year, reducing reliance on artificial heating and cooling systems.
  </p>
  <p>
    Easy Installation and Maintenance : Despite their robust nature, natural stone wall cladding tiles are surprisingly easy to install, thanks to modern techniques and advancements in installation methods. Once in place, they require minimal upkeep, typically needing only occasional cleaning to retain their luster. This simplicity in maintenance adds to their appeal for homeowners seeking hassle-free yet exquisite design solutions.

  </p>
  <p>
    Karishma Tiles & Stones' collection of natural stone wall cladding tiles is an embodiment of durability, elegance, sustainability, and practicality. Elevate your spaces with our versatile range, crafted to bring enduring beauty and charm to your interiors or exteriors. Embrace the sophistication of natural stone and transform your walls with Karishma Tiles and stones.
  </p>
      </>
    )
  },
  "exploring-the-essential-characteristics-of-luxury-bathroom-tiles": {
    date: "12 Dec, 2023",
    image: "/blog-8.jpg",
    content: (
  <>
    <p>
      The art of crafting luxury bathroom tiles lies in the seamless fusion of design and functionality. Each tile contributes to an ambience of refined elegance, setting the stage for a luxurious bathing experience. Immerse yourself in the epitome of sophistication with Karishma Tiles' opulent collection of Luxury Bathroom Tiles. Karishma Tiles takes pride in curating an exclusive array of Luxury Bathroom Tiles, each a testament to precision and aesthetics. From sleek, modern designs to timeless classics, our tiles seamlessly blend into diverse design schemes, ensuring your bathroom exudes opulence. In this article, let us delve into the characteristics of luxury bathroom tiles, exploring their intricate design and unparalleled functionality.
    </p>

    <p>
      Unparalleled Artistry : Artistry forms the essence of exceptional tile design, seamlessly merging skill and creative fervor to transcend conventional boundaries, imbuing spaces with an ethereal essence of sophistication and enduring beauty. Karishma Tiles employs cutting-edge techniques and a keen eye for detail to ensure each tile stands as a masterpiece in its own right.
    </p>

    <p>
      Mix of Materials : The interplay of diverse materials in tile design creates a tactile experience, adding depth and character to bathroom spaces. It’s the fusion of these elements that enriches the interior atmosphere. Our collection transcends the ordinary, offering a blend of materials that redefine luxury. Karishma Tiles provides a canvas of options, allowing you to personalize your bathroom with textures and finishes that resonate with your style.
    </p>

    <p>
      Enduring Elegance : Luxury is an investment in timeless elegance. Karishma Tiles' Luxury Bathroom Tiles stand the test of time, boasting durability and aesthetic appeal. They ensure that spaces retain their charm and sophistication, making each moment spent in them truly luxurious.
    </p>

    <p>
      Tailored Solutions for Every Preference : Personalisation is the cornerstone of luxury. It is the ability to translate unique preferences into tangible design elements that make spaces distinctly personal and luxurious. Understanding that luxury is a personal journey, Karishma Tiles offers tailored solutions for every taste. Whether you prefer the minimalist allure of monochrome tiles or the intricate patterns of mosaic designs, our collection caters to diverse preferences.
    </p>

    <p>
      Unmatched Variety : Versatility in design allows for creative expression, enabling spaces to embody individuality while maintaining a luxurious allure. Explore a world of possibilities with Karishma Tiles' diverse range of Luxury Bathroom Tiles. From floor tiles that ground your space in sophistication to wall tiles that redefine vertical elegance, our collection ensures a cohesive and luxurious aesthetic in every corner of your bathroom.
    </p>

    <p>
      Karishma Tiles continues to redefine opulence, offering a versatile range of luxury bathroom tiles that transcend boundaries, ensuring that every corner of your bathroom embodies the essence of timeless luxury. Immerse yourself in this world of sophistication, and transform your space into a sanctuary of unparalleled beauty and refinement.
    </p>
  </>
  )
  },
  "top-10-tile-trends-for-modern-homes": {
  date: "2 June, 2023",
  title: "Top Tile Trends for Modern Homes",
  excerpt: "Explore modern tile trends for stylish homes...",
  image: "/blog-6.jpg",
  content: (
    <>
      <p>
        As we enter a new era of interior design, tiles continue to be a popular choice for modern homes. 
        With their versatility, durability, and aesthetic appeal, tiles are an excellent option for flooring, 
        walls, backsplashes, and more. If you're planning to renovate or update your home, here are the top 
        10 tile trends for modern homes that you should consider, brought to you by Karishma Tiles and Surfaces.
      </p>

      <p>
        <b>Large Format Tiles:</b> Gone are the days of small, traditional-sized tiles. Large format tiles, 
        such as 24x24 inches or even larger, have gained popularity in modern homes. They create a seamless 
        and sophisticated look, especially in open-concept spaces, and minimise grout lines for a sleek appearance. 
        <br /><br />

        <b>Geometric Patterns:</b> Geometric tiles are making a bold statement in modern homes. From hexagons to 
        chevron, herringbone, and Moroccan-inspired patterns, geometric tiles add visual interest and a 
        contemporary vibe to any space. They are often used as focal points on walls, backsplashes, or even entire floors. 
        <br /><br />

        <b>Concrete Look:</b> Industrial-inspired design is on the rise, and concrete-look tiles are a perfect 
        fit for this trend. These tiles mimic the raw, minimalist look of concrete but without the maintenance 
        and sealing requirements. They are ideal for modern, urban homes and can be used in various applications, 
        from floors to walls.
      </p>

      {/* ✅ 3 IMAGES IN ONE ROW CENTER */}
      <div className="flex justify-center gap-6 mt-8 flex-wrap">
        <div className="w-72 h-72 relative">
          <Image
            src="/title1.jpg"
            alt="Large Format Tiles"
            fill
            className="object-cover rounded-lg"
          />
        </div>

        <div className="w-72 h-72 relative">
          <Image
            src="/title2.jpg"
            alt="Geometric Tiles"
            fill
            className="object-cover rounded-lg"
          />
        </div>

        <div className="w-72 h-72 relative">
          <Image
            src="/title3.jpg"
            alt="Concrete Look Tiles"
            fill
            className="object-cover rounded-lg"
          />
        </div>
      </div>
    </>
  )
},
"choosing-the-right-tiles-for-your-bathroom":{
  date: "15 March, 2023",
  title: "Choosing the Right Tiles for Your Bathroom",
  excerpt: "Bathroom tiles guide for perfect selection...",
  image: "/bathroom.jpg",
  content: (
    <>  
      <p>
       Bathrooms are one of the most important rooms in any home, and choosing the right tiles can make all the difference in terms of functionality and aesthetics. With so many options available in the market, selecting the right tiles can be a daunting task. In this blog, we'll guide you through the process of choosing the right tiles for your bathroom. Consider the Space: Before selecting tiles, it's essential to consider the size and layout of your bathroom. Large tiles can make a small space appear larger, while smaller tiles can create a cosy and intimate atmosphere. It's important to choose the right size of tiles that will complement your bathroom's size and layout.    
       </p>
       <p>
        Durability: Bathrooms are high-moisture areas, and tiles need to be able to withstand the damp and humid conditions. Ceramic, porcelain, and natural stone tiles are all excellent choices for bathroom floors and walls as they are durable, easy to clean, and moisture-resistant.

       </p>
       
      {/* ✅ 3 IMAGES IN ONE ROW CENTER */}
      <div className="flex justify-center gap-6 mt-8 flex-wrap">
        <div className="w-72 h-72 relative">
          <Image
            src="/b1.jpg"
            alt="Large Format Tiles"
            fill
            className="object-cover rounded-lg"
          />
        </div>

        <div className="w-72 h-72 relative">
          <Image
            src="/b2.jpg"
            alt="Geometric Tiles"
            fill
            className="object-cover rounded-lg"
          />
        </div>

        <div className="w-72 h-72 relative">
          <Image
            src="/b3.jpg"
            alt="Concrete Look Tiles"
            fill
            className="object-cover rounded-lg"
          />
        </div>
      </div>
      <p>
        Slip-Resistance: Safety is crucial in a bathroom, especially for young children and the elderly. Choosing slip-resistant tiles can help prevent accidents and injuries. Textured or matte finishes are better options for bathroom floors as they provide better traction and prevent slips and falls. Color and Design: Tiles come in a wide range of colours, patterns, and designs, making it easy to find the perfect match for your bathroom's style and décor. Light-coloured tiles can make a small bathroom appear larger, while bold patterns and colours can add character and personality to any space. Consider the overall design of your bathroom and choose tiles that complement the theme.

      </p>
      <p>
        Maintenance: Some tiles require more maintenance than others. For example, natural stone tiles may require sealing to prevent staining, while ceramic and porcelain tiles are generally low-maintenance. Consider the amount of time and effort you're willing to invest in maintaining your bathroom tiles when making your selection.

      </p>
      <p>
        Budget: Finally, it's essential to consider your budget when choosing bathroom tiles. While there are many high-end options available, there are also affordable choices that can still provide a stylish and functional look. Determine your budget beforehand and explore the options within that range to find the best tiles for your bathroom.
      </p>

      </>
    )
},
"the-beauty-of-natural-stone-tiles": {
  date: "5 March, 2023",
  title: "The Beauty of Natural Stone Tiles",
  excerpt: "Natural stone tiles for timeless beauty...",
  image: "/natural.jpg",
  content: (
    <>
      <p>
      Natural stone tiles are one of the most beautiful and versatile options for flooring, wall cladding, and other decorative purposes. They come in a variety of types, colours, patterns, and textures, each with its unique character and charm. Whether you are looking to add warmth and elegance to your home, office, or outdoor living space, natural stone tiles can enhance the beauty and value of your property.
    </p>
    <p>
      Here are some of the reasons why natural stone tiles are so beautiful:
Natural beauty: Natural stone tiles are quarried from the earth, so each piece has its unique colour, veining, and texture. No two tiles are the same, which means that you can create a truly one-of-a-kind look for your space. The natural beauty of stone tiles adds warmth, depth, and character to any room.
    </p>

    {/* ✅ 3 IMAGES IN ONE ROW CENTER */}
      <div className="flex justify-center gap-6 mt-8 flex-wrap">
        <div className="w-72 h-72 relative">
          <Image
            src="/n1.jpg"
            alt="Large Format Tiles"
            fill
            className="object-cover rounded-lg"
          />
        </div>

        <div className="w-72 h-72 relative">
          <Image
            src="/n2.jpg"
            alt="Geometric Tiles"
            fill
            className="object-cover rounded-lg"
          />
        </div>

        <div className="w-72 h-72 relative">
          <Image
            src="/n3.jpg"
            alt="Concrete Look Tiles"
            fill
            className="object-cover rounded-lg"
          />
        </div>
      </div>
      <p>
        Durability: Natural stone tiles are incredibly durable and can withstand heavy foot traffic, moisture, and extreme temperatures. They are resistant to scratches, stains, and fading, making them an ideal choice for high-traffic areas like kitchens, bathrooms, and entryways.

      </p>
      <p>
        Versatility: Natural stone tiles can be used in a variety of applications, from flooring and wall cladding to countertops and backsplashes. They can be cut into different shapes and sizes, allowing for endless design possibilities. Whether you prefer a rustic, traditional, or modern look, there is a natural stone tile that can complement your style.
      </p>
      <p>
        Value: Natural stone tiles can add value to your property. They are a timeless and classic choice that can enhance the overall aesthetic appeal of your home or office. Additionally, they are low-maintenance and long-lasting, which can save you money in the long run.
      </p>
      <p>
        In conclusion, natural stone tiles are a beautiful and practical choice for any space. They offer natural beauty, durability, versatility, and value that can enhance the overall look and feel of your home or office. If you are considering using natural stone tiles for your next project, be sure to choose a reputable supplier like Karishma Tiles and Surfaces to ensure that you get high-quality products that will last for years to come.
      </p>


      </>
    )
  },
  "creating-a-statement-with-feature-tiles": {
    date: "15 Feb, 2022",
    title: "Creating a Statement with Feature Tiles",
    excerpt: "Bathrooms need careful tile selection...",
    image: "/feature.jpg",
    content: (
      <>
        <p>
        Feature tiles are a great way to add visual interest and personality to your bathroom. They can be used to create a statement wall, a unique backsplash, or even a decorative floor. When choosing feature tiles, it's important to consider the overall design of your bathroom and select tiles that complement the style and colour scheme. Whether you opt for bold patterns, vibrant colours, or intricate textures, feature tiles can transform your bathroom into a stylish and inviting space.
        </p>
        <p>
          Choose the Right Tiles: The first step in creating a statement with feature tiles is to choose the right tiles. Consider the style, color, and pattern of your tiles carefully to make sure they complement the overall design of your room. You may want to select a bold pattern or a bright color to create a dramatic effect, or you could opt for a more subtle, textured tile to add some interest without overwhelming the space.
        </p>
            {/* ✅ 3 IMAGES IN ONE ROW CENTER */}
      <div className="flex justify-center gap-6 mt-8 flex-wrap">
        <div className="w-72 h-72 relative">
          <Image
            src="/f1.jpg"
            alt="Large Format Tiles"
            fill
            className="object-cover rounded-lg"
          />
        </div>

        <div className="w-72 h-72 relative">
          <Image
            src="/f2.jpg"
            alt="Geometric Tiles"
            fill
            className="object-cover rounded-lg"
          />
        </div>

        <div className="w-72 h-72 relative">
          <Image
            src="/f3.jpg"
            alt="Concrete Look Tiles"
            fill
            className="object-cover rounded-lg"
          />
        </div>
      </div>
      <p>
        Think About Placement: Once you have chosen your feature tiles, think about where you want to place them. Feature tiles can be used on a whole wall, as a backsplash, or as a border around the room. They can also be used to create a pattern or mosaic on the floor. Think about the placement carefully to make sure it enhances the overall design of the room and draws the eye in.
      </p>
      <p>
        Balance the Design: When using feature tiles, it's important to balance the design of the room. If you choose bold, patterned tiles, consider using more neutral tiles on the other walls and floor to create a cohesive look. If you opt for more subtle feature tiles, you can use bolder tiles elsewhere in the room to add some interest and contrast.
      </p>
        <p>
        In conclusion, feature tiles are a great way to create a statement in your bathroom. By choosing the right tiles, thinking about placement, and balancing the design, you can create a stylish and inviting space that reflects your personality and style. Whether you opt for bold patterns or subtle textures, feature tiles can transform your bathroom into a unique and beautiful space.
        </p>
        
      </>
    )
  },
  "the-benefits-of-porcelain-tiles": {
    date: "10 Jan, 2022",
    title: "The Benefits of Porcelain Tiles", 
    excerpt: "Porcelain tiles for durability and style...",
    image: "/porcelian.jpg",
    content: (
      <>
        <p>
        Porcelain tiles are a popular choice for flooring and wall cladding due to their durability, low maintenance, and aesthetic appeal. They are made from a dense, fine-grained clay that is fired at high temperatures, making them resistant to moisture, stains, and scratches. Porcelain tiles come in a wide variety of colors, patterns, and textures, allowing for endless design possibilities. They can mimic the look of natural stone, wood, or even concrete, making them a versatile option for any space. Additionally, porcelain tiles are easy to clean and maintain, making them a practical choice for high-traffic areas like kitchens and bathrooms.
        </p>
        <p>
          Durability: Porcelain tiles are incredibly durable and can withstand heavy foot traffic, moisture, and extreme temperatures. They are resistant to scratches, stains, and fading, making them an ideal choice for high-traffic areas like kitchens, bathrooms, and entryways.
        </p>
         {/* ✅ 3 IMAGES IN ONE ROW CENTER */}
      <div className="flex justify-center gap-6 mt-8 flex-wrap">
        <div className="w-72 h-72 relative">
          <Image
            src="/l1.jpg"
            alt="Large Format Tiles"
            fill
            className="object-cover rounded-lg"
          />
        </div>

        <div className="w-72 h-72 relative">
          <Image
            src="/l2.jpg"
            alt="Geometric Tiles"
            fill
            className="object-cover rounded-lg"
          />
        </div>

        <div className="w-72 h-72 relative">
          <Image
            src="/l3.jpg"
            alt="Concrete Look Tiles"
            fill
            className="object-cover rounded-lg"
          />
        </div>
      </div>
        <p>
        Versatility: Porcelain tiles can be used in a variety of applications, from flooring and wall cladding to countertops and backsplashes. They can be cut into different shapes and sizes, allowing for endless design possibilities. Whether you prefer a rustic, traditional, or modern look, there is a porcelain tile that can complement your style.
        </p>
        <p>
        Low Maintenance: Porcelain tiles are easy to clean and maintain. They are resistant to stains and moisture, making them ideal for kitchens and bathrooms. Regular sweeping and mopping are usually sufficient to keep them looking their best. Additionally, porcelain tiles do not require sealing like natural stone tiles, which can save you time and money in the long run.
        </p>
        <p>
        In conclusion, porcelain tiles are a durable, versatile, and low-maintenance option for flooring and wall cladding. With their wide range of colors, patterns, and textures, they can enhance the aesthetic appeal of any space while providing practical benefits. If you are considering porcelain tiles for your next project, be sure to choose a reputable supplier like Karishma Tiles and Surfaces to ensure that you get high-quality products that will last for years to come.
        </p>


      </>
    )
  },
  "tile-cleaning-and-maintenance-tips": {
    date: "5 Jan, 2022",
    title: "Tile Cleaning and Maintenance Tips",
    excerpt: "Keep your tiles looking new with these tips...",
    image: "/clean.jpg",
    content: (
      <>
        <p>
        Keeping your tiles clean and well-maintained is essential to preserving their beauty and longevity. Here are some tile cleaning and maintenance tips to help you keep your tiles looking new:
        </p>
        <p>
          
Regular Sweeping or Vacuuming: Regular sweeping or vacuuming is crucial to prevent dirt, dust, and debris from scratching the surface of your tiles. Use a soft-bristled broom or a vacuum cleaner with a brush attachment to remove loose dirt and particles from your tile floors and walls.
        </p>
        {/* ✅ 3 IMAGES IN ONE ROW CENTER */}
      <div className="flex justify-center gap-6 mt-8 flex-wrap">
        <div className="w-72 h-72 relative">
          <Image
            src="/a1.jpg"
            alt="Large Format Tiles"
            fill
            className="object-cover rounded-lg"
          />
        </div>

        <div className="w-72 h-72 relative">
          <Image
            src="/a2.jpg"
            alt="Geometric Tiles"
            fill
            className="object-cover rounded-lg"
          />
        </div>

        <div className="w-72 h-72 relative">
          <Image
            src="/a3.jpg"
            alt="Concrete Look Tiles"
            fill
            className="object-cover rounded-lg"
          />
        </div>
      </div>
      <p>
        Use the Right Cleaning Products: When cleaning your tiles, it's important to use the right cleaning products. Avoid using harsh chemicals or abrasive cleaners that can damage the surface of your tiles. Instead, opt for mild detergents or tile-specific cleaners that are designed to clean without causing harm. Always follow the manufacturer's instructions for cleaning products to ensure safe and effective use.
      </p>
      <p>
        Regular Sealing: If you have natural stone tiles, it's important to seal them regularly to protect them from stains and moisture. Sealing helps to create a barrier that prevents liquids from penetrating the surface of the tiles, which can cause damage over time. Be sure to choose a high-quality sealer that is appropriate for your specific type of tile and follow the manufacturer's instructions for application.
      </p>
      <p>
        Avoid Standing Water: Standing water can seep into porous tiles and grout lines, causing damage and promoting mold growth. Wipe up standing water promptly, especially in areas prone to water exposure, such as bathrooms and kitchens. Use bath mats or rugs in high-moisture areas to absorb excess water. Sealants: If you have natural stone tiles or unglazed tiles, it's important to apply a sealant to protect them from staining and damage. Sealants create a barrier on the surface of the tiles, preventing liquids from penetrating and causing damage. Follow the manufacturer's instructions for sealing your tiles and reapply as needed.
      </p>
      <p>
        In conclusion, proper cleaning and maintenance are essential to keeping your tiles looking new and preserving their longevity. Regular sweeping or vacuuming, using the right cleaning products, regular sealing, and avoiding standing water are all important tips to help you maintain the beauty and durability of your tiles. If you have any specific questions about tile cleaning and maintenance, be sure to consult with a professional or contact a reputable supplier like Karishma Tiles and Surfaces for expert advice.
        </p>
        </>
    )
  },
        
};

export default function BlogPost() {
  const { slug } = useParams();

  const post = blogContent[slug] || blogContent["How-to-Select-Tiles-for-The-Living-Room"];

  const displayTitle = slug
    ? slug.replace(/-/g, ' ').toUpperCase()
    : "BLOG POST";

  return (
    <>
      <Navbar />

      <article className="bg-white min-h-screen pt-10 pb-20">
        <div className="max-w-6xl mx-auto px-6">

          {/* HEADER */}
          <header className="text-center mb-10">
            <p className="text-gray-500 text-sm tracking-[0.3em] uppercase mb-4">
              {post.date}
            </p>
            <h1 className="text-3xl md:text-4xl font-serif text-gray-800 uppercase mb-6">
              {displayTitle}
            </h1>
          </header>

          {/* IMAGE */}
          <div className="relative w-full h-[300px] md:h-[500px] mb-12">
            <Image 
              src={post.image} 
              alt="Blog" 
              fill 
              sizes="100vw"
              className="object-cover" 
            />
          </div>

          {/* ✅ DYNAMIC CONTENT (IMPORTANT FIX) */}
          <div className="max-w-5xl mx-auto text-gray-600 leading-relaxed space-y-6 text-justify">
            {post.content}
            {slug === "How-to-Select-Tiles-for-The-Living-Room" && (
  <div className="max-w-5xl mx-auto mt-16">
    <h2 className="text-2xl font-semibold mb-6">FAQS</h2>

    <div className="border">
      <div className="p-4 bg-gray-100">
        <b>1. What type of tiles are best?</b>
        <p>Light-coloured tiles are best.</p>
      </div>

      <div className="p-4 bg-gray-200">
        <b>2. How to choose tiles?</b>
        <p>Consider size, budget, durability.</p>
      </div>

      <div className="p-4 bg-gray-100">
        <b>3. What is the best tile for living room?</b>
        <p>Porcelain and ceramic tiles are popular choices.</p>
      </div>

      <div className="p-4 bg-gray-200">
        <b>4. What is the best colour for living room tiles?</b>
        <p>Light colours like cream, white, beige, or light grey are popular.</p>
      </div>

      <div className="p-4 bg-gray-100">
        <b>5. What should be the size of my living room tiles?</b>
        <p>Large-format tiles are trending.</p>
      </div>

      <div className="p-4 bg-gray-200">
        <b>6. What is the best material for living room tiles?</b>
        <p>Porcelain tiles are durable and water-resistant.</p>
      </div>
    </div>
  </div>
)}
          </div>

         

          {/* SOCIAL */}
          <div className="flex justify-center gap-6 mt-16">
            <FaPinterestP />
            <FaLinkedinIn />
            <FaFacebookF />
            <FaInstagram />
          </div>

        </div>

        <BlogSection />
      </article>
      <Footer />
    </>
  );
}