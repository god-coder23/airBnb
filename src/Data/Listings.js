const baseListings = [
  { title: "Villa in South Goa", priceText: "$72 NZD for 1 night", isGuestFavourite: true, images: ["https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&h=800&fit=crop"] },
  { title: "Home in Benaulim", priceText: "$211 NZD for 1 night", isGuestFavourite: true, images: ["https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&h=800&fit=crop"] },
  { title: "Flat in Canacona", priceText: "$60 NZD for 1 night", isGuestFavourite: true, images: ["https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&h=800&fit=crop"] },
  { title: "Home in Candolim", priceText: "$139 NZD for 2 nights", isGuestFavourite: true, images: ["https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=800&h=800&fit=crop"] },
  { title: "Flat in Canacona", priceText: "$85 NZD for 1 night", isGuestFavourite: true, images: ["https://images.unsplash.com/photo-1484154218962-a197022b5858?w=800&h=800&fit=crop"] },
  { title: "Nature lodge in Agonda", priceText: "$21 NZD for 1 night", isGuestFavourite: true, images: ["https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=800&h=800&fit=crop"] },
  { title: "Cabin in Calangute", priceText: "$163 NZD for 2 nights", isGuestFavourite: false, images: ["https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?w=800&h=800&fit=crop"] },
  { title: "Flat in Mumbai", priceText: "$318 NZD for 2 nights", isGuestFavourite: true, images: ["https://images.unsplash.com/photo-1469022563428-aa04fef9f5a2?w=800&h=800&fit=crop"] },
  { title: "Flat in Santacruz East", priceText: "$298 NZD for 2 nights", isGuestFavourite: false, images: ["https://images.unsplash.com/photo-1540518614846-7eded433c457?w=800&h=800&fit=crop"] },
  { title: "Home in Mumbai", priceText: "$526 NZD for 2 nights . ★ New", isGuestFavourite: true, images: ["https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?w=800&h=800&fit=crop"] }
];

const listings = Array.from({ length: 50 }).map((_, index) => ({
  ...baseListings[index % baseListings.length],
  id: index + 1
}));

export default listings;
