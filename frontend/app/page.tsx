import Link from "next/link";

type Profile = {
  id: string;
  name: string;
  avatar: string;
  gender: string;
  age: number;
  pronouns: string;
};

async function getProfiles(): Promise<Profile[]> {
  const res = await fetch("http://localhost:5000/api/profiles", {
    cache: "no-store",
  });
  return res.json();
}

export default async function HomePage() {
  const profiles = await getProfiles();

  return (
    <div className="min-h-screen bg-white px-10 py-12">
      {/* Header */}
      <div className="flex justify-between items-center mb-12">
        <div className="font-bold text-gray-900">PRME</div>
        <div className="font-bold text-gray-900">AACSB</div>
      </div>

      {/* Profile Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {profiles.map((profile) => (
          <div
            key={profile.id}
            className="rounded-2xl bg-white shadow-sm hover:shadow-xl
            hover:-translate-y-1 transition-all duration-300"
          >
            {/* Orange Top */}
            <div className="h-28 bg-gradient-to-br from-orange-400 via-orange-500 to-orange-600 relative rounded-t-2xl">
              <img
                src={profile.avatar}
                alt={profile.name}
                className="w-24 h-24 rounded-full border-4 border-white
                absolute left-1/2 -bottom-12 -translate-x-1/2
                bg-white shadow-lg"
              />
            </div>

            {/* Spacer for overlap */}
            <div className="h-14"></div>

            {/* Text */}
            <div className="pb-6 text-center">
              <h2 className="font-semibold text-lg tracking-tight text-gray-900">
                {profile.name}
              </h2>

              <p className="text-sm text-gray-600 mt-1">
                {profile.gender} | {profile.age} | {profile.pronouns}
              </p>

              {/* Link button */}
              <Link
                href={`/profile/${profile.id}`}
                className="inline-block mt-4 text-orange-600
                font-medium hover:underline"
              >
                View Profile →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
