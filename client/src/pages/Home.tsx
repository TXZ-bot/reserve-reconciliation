import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        className="relative h-screen flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage:
            "url('https://d2xsxph8kpxj0f.cloudfront.net/310519663631527343/fdLMvgYcjwaVbxEXHXhxt3/hero-reconciliation-9LJApS3Lya33qTAaQsDUaK.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/40" />

        {/* Hero Content */}
        <div className="relative z-10 container text-center text-white max-w-3xl">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Reconciliation in Action
          </h1>
          <p className="text-xl md:text-2xl mb-8 font-light">
            Reserve Living Conditions: The Urgent Call for Systemic Change
          </p>
          <p className="text-lg mb-12 opacity-90 max-w-2xl mx-auto">
            The Truth and Reconciliation Commission's 94 Calls to Action aren't historical documents—they are desperate pleas to fix the systemic issues that make reserve living conditions a national crisis.
          </p>

          <Link href="/ctas">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2"
            >
              Explore the Crisis <ArrowRight size={20} />
            </Button>
          </Link>
        </div>
      </section>

      {/* The Three Pillars */}
      <section className="py-20 bg-background">
        <div className="container">
          <h2 className="text-4xl font-bold text-center mb-16 text-foreground">
            Three Urgent Calls to Action
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* CTA #8 */}
            <div className="bg-card border border-border rounded-lg p-8 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold">
                  #8
                </div>
                <h3 className="text-xl font-bold text-foreground">Education Funding</h3>
              </div>
              <p className="text-card-foreground mb-4">
                Eliminate the discrepancy in federal education funding for First Nations children on reserves.
              </p>
              <p className="text-sm text-muted-foreground">
                <strong>The Reality:</strong> Despite a 112% funding increase since 2015, the gap persists. Every year we wait, another cohort of students drops out without proper resources.
              </p>
            </div>

            {/* CTA #19 */}
            <div className="bg-card border border-border rounded-lg p-8 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold">
                  #19
                </div>
                <h3 className="text-xl font-bold text-foreground">Health Rights</h3>
              </div>
              <p className="text-card-foreground mb-4">
                Recognize and implement the health-care rights of Aboriginal people.
              </p>
              <p className="text-sm text-muted-foreground">
                <strong>The Reality:</strong> The urgency is life and death. We still need to establish measurable goals for basic health indicators like infant mortality and suicide rates.
              </p>
            </div>

            {/* CTA #1 */}
            <div className="bg-card border border-border rounded-lg p-8 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold">
                  #1
                </div>
                <h3 className="text-xl font-bold text-foreground">Child Welfare</h3>
              </div>
              <p className="text-card-foreground mb-4">
                Reduce the number of Aboriginal children in care.
              </p>
              <p className="text-sm text-muted-foreground">
                <strong>The Reality:</strong> This is survival. If we don't address housing and poverty, the child welfare system becomes a modern-day residential school.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Diorama */}
      <section className="py-20 bg-secondary/50">
        <div className="container">
          <h2 className="text-4xl font-bold mb-12 text-foreground">
            The Disparity Visualized
          </h2>
          <div className="rounded-lg overflow-hidden shadow-xl">
            <img
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663631527343/fdLMvgYcjwaVbxEXHXhxt3/diorama-reserve-reality-4wFMcZcLHEz7tRJhr5kjqA.webp"
              alt="3D Diorama showing reserve vs urban disparity"
              className="w-full h-auto"
            />
          </div>
          <p className="text-center text-muted-foreground mt-6 text-lg">
            A split-view representation of the systemic inequities in reserve living conditions compared to urban communities.
          </p>
        </div>
      </section>

      {/* Call to Explore */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container text-center max-w-2xl">
          <h2 className="text-4xl font-bold mb-6">
            What Does Reconciliation Look Like?
          </h2>
          <p className="text-lg mb-8 opacity-90">
            It's not enough to acknowledge the past. True reconciliation requires proven action that prioritizes Indigenous wellbeing and systemic change.
          </p>
          <Link href="/reflection">
            <Button
              size="lg"
              variant="secondary"
              className="gap-2"
            >
              Read the Full Reflection <ArrowRight size={20} />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
