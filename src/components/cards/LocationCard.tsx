import { MapPin, Phone, EnvelopeSimple, Clock } from "@phosphor-icons/react/dist/ssr";
import type { Location } from "@/lib/types";

// Branch card with an embedded Google map. Uses the keyless Maps embed so it
// renders without an API key; swap to the Embed API for production analytics.
export function LocationCard({
  location,
  withMap = true,
}: {
  location: Location;
  withMap?: boolean;
}) {
  const mapSrc = `https://maps.google.com/maps?q=${encodeURIComponent(
    location.mapQuery
  )}&z=13&output=embed`;

  return (
    <div className="flex flex-col border border-line bg-panel/30">
      {withMap ? (
        <div className="relative aspect-[16/9] overflow-hidden border-b border-line bg-panel">
          <iframe
            src={mapSrc}
            title={`Map — ${location.name}`}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="absolute inset-0 size-full"
          />
        </div>
      ) : null}

      <div className="flex flex-1 flex-col gap-4 p-6">
        <div>
          <h3 className="font-display text-xl font-semibold tracking-tight text-bone">
            {location.name}
          </h3>
          <p className="mt-1 font-mono text-[0.65rem] uppercase tracking-[0.16em] text-mute-2">
            {location.role}
          </p>
        </div>

        <ul className="space-y-3 text-sm text-mute">
          <li className="flex gap-3">
            <MapPin className="mt-0.5 size-4 shrink-0 text-mute-2" />
            <span className="leading-relaxed">{location.address.join(", ")}</span>
          </li>
          <li className="flex gap-3">
            <Phone className="mt-0.5 size-4 shrink-0 text-mute-2" />
            <a
              href={`tel:${location.phone.replace(/\s/g, "")}`}
              className="font-mono transition-colors hover:text-bone"
            >
              {location.phone}
            </a>
          </li>
          <li className="flex gap-3">
            <EnvelopeSimple className="mt-0.5 size-4 shrink-0 text-mute-2" />
            <a
              href={`mailto:${location.email}`}
              className="font-mono transition-colors hover:text-bone"
            >
              {location.email}
            </a>
          </li>
          <li className="flex gap-3">
            <Clock className="mt-0.5 size-4 shrink-0 text-mute-2" />
            <span>{location.hours}</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
