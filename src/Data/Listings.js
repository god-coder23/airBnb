const baseListings = [
  {
    location: "Manali, India",
    distance: "362 kilometres away",
    dates: "1–6 May",
    price: 8245,
    currency: "₹",
    rating: 4.92,
    isGuestFavourite: true,
    images: [
      "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800&h=800&fit=crop"
    ]
  },
  {
    location: "Shimla, India",
    distance: "289 kilometres away",
    dates: "3–8 May",
    price: 6500,
    currency: "₹",
    rating: 4.85,
    isGuestFavourite: false,
    images: [
      "https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800&h=800&fit=crop"
    ]
  },
  {
    location: "Goa, India",
    distance: "584 kilometres away",
    dates: "10–15 May",
    price: 12350,
    currency: "₹",
    rating: 4.97,
    isGuestFavourite: true,
    images: [
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1519046904884-53103b34b206?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1540541338287-41700207dee6?w=800&h=800&fit=crop"
    ]
  },
  {
    location: "Jaipur, India",
    distance: "245 kilometres away",
    dates: "5–10 May",
    price: 4750,
    currency: "₹",
    rating: 4.78,
    isGuestFavourite: false,
    images: [
      "https://images.unsplash.com/photo-1524813686514-a57563d77965?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1599661046289-e31897846e41?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1477587458883-47145ed94245?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1505761671935-60b3a7427bad?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=800&h=800&fit=crop"
    ]
  },
  {
    location: "Udaipur, India",
    distance: "431 kilometres away",
    dates: "12–17 May",
    price: 9800,
    currency: "₹",
    rating: 4.93,
    isGuestFavourite: true,
    images: [
      "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?w=800&h=800&fit=crop"
    ]
  },
  {
    location: "Rishikesh, India",
    distance: "198 kilometres away",
    dates: "3–8 Jun",
    price: 5200,
    currency: "₹",
    rating: 4.88,
    isGuestFavourite: false,
    images: [
      "https://images.unsplash.com/photo-1439066615861-d1af74d74000?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&h=800&fit=crop"
    ]
  },
  {
    location: "Ooty, India",
    distance: "526 kilometres away",
    dates: "7–12 May",
    price: 7100,
    currency: "₹",
    rating: 4.81,
    isGuestFavourite: false,
    images: [
      "https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1465056836900-8f1e940b3a5c?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1418065460487-3e41a6c84dc5?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1448375240586-882707db888b?w=800&h=800&fit=crop"
    ]
  },
  {
    location: "Coorg, India",
    distance: "478 kilometres away",
    dates: "15–20 May",
    price: 8900,
    currency: "₹",
    rating: 4.95,
    isGuestFavourite: true,
    images: [
      "https://images.unsplash.com/photo-1510798831971-661eb04b3739?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1587381420270-063b0a5d7fe3?w=800&h=800&fit=crop"
    ]
  }
];

// Generate exactly 63 listings (9 rows * 7 columns) based on the array above
const listings = Array.from({ length: 63 }).map((_, index) => ({
  ...baseListings[index % baseListings.length],
  id: index + 1
}));

export default listings;
