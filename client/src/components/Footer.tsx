import { Link } from "wouter";

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground border-t border-border">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="font-bold text-lg mb-4">About This Project</h3>
            <p className="text-sm opacity-90">
              A student-led advocacy platform highlighting the urgent need for reconciliation through equitable reserve living conditions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Navigate</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/">
                  <a className="hover:underline">Home</a>
                </Link>
              </li>
              <li>
                <Link href="/ctas">
                  <a className="hover:underline">The CTAs</a>
                </Link>
              </li>
              <li>
                <Link href="/conditions">
                  <a className="hover:underline">Living Conditions</a>
                </Link>
              </li>
              <li>
                <Link href="/reflection">
                  <a className="hover:underline">Reflection</a>
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-bold text-lg mb-4">Learn More</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="https://www.trc.ca/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  Truth and Reconciliation Commission
                </a>
              </li>
              <li>
                <a
                  href="https://www.sac-isc.gc.ca/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  Indigenous Services Canada
                </a>
              </li>
              <li>
                <a
                  href="https://www.afn.ca/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  Assembly of First Nations
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 text-center text-sm opacity-75">
          <p>
            Created as a Checkpoint #3 Media Product for Reconciliation Education
          </p>
          <p className="mt-2">
            "Reconciliation isn't just about being sorry—it's about fixing the ongoing problems that stem from that history."
          </p>
        </div>
      </div>
    </footer>
  );
}
