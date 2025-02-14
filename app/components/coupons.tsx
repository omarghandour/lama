export default function Coupons() {
  const coupons = [
    "1 Free Hug (Valid forever)",
    "Breakfast in Bed (If I wake up early)",
    "You control the TV for one whole evening",
  ];
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-red-500 text-white text-center px-6">
      <h1 className="text-3xl font-bold mb-4">Love Coupons 💌</h1>
      {coupons.map((coupon, index) => (
        <div
          key={index}
          className="mt-2 px-6 py-3 bg-white text-red-500 rounded-lg text-lg w-64"
        >
          {coupon}
        </div>
      ))}
    </div>
  );
}
