import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

export default function ResourcesPage() {
  const resources = [
    {
      category: "Official TRC Documents",
      items: [
        {
          title: "Truth and Reconciliation Commission",
          description: "The official TRC website with all 94 Calls to Action and the full report.",
          url: "https://www.trc.ca/",
        },
        {
          title: "Calls to Action Summary",
          description: "A comprehensive overview of all 94 Calls to Action and their status.",
          url: "https://www.trc.ca/calls-to-action",
        },
      ],
    },
    {
      category: "Government & Policy",
      items: [
        {
          title: "Indigenous Services Canada",
          description: "Federal government updates on education, health, and child welfare initiatives.",
          url: "https://www.sac-isc.gc.ca/",
        },
        {
          title: "Assembly of First Nations",
          description: "AFN advocacy and updates on reconciliation progress.",
          url: "https://www.afn.ca/",
        },
        {
          title: "Indigenous Watchdog",
          description: "Independent tracking of CTA implementation status.",
          url: "https://www.indigenouswatchdog.org/",
        },
      ],
    },
    {
      category: "Research & Data",
      items: [
        {
          title: "Statistics Canada - Indigenous Health",
          description: "Official health statistics and indicators for Indigenous peoples.",
          url: "https://www150.statcan.gc.ca/n1/en/type/data",
        },
        {
          title: "First Nations and Inuit Health Indicators",
          description: "Real-time health data and wellness indicators.",
          url: "https://health-infobase.canada.ca/fnih/",
        },
        {
          title: "Child Welfare Statistics",
          description: "Data on Indigenous children in foster care and child welfare outcomes.",
          url: "https://www150.statcan.gc.ca/",
        },
      ],
    },
    {
      category: "Advocacy & Action",
      items: [
        {
          title: "Cindy Blackstock - First Nations Child & Family Caring Society",
          description: "Leading advocate for Indigenous child welfare rights and systemic change.",
          url: "https://www.fncaringsociety.com/",
        },
        {
          title: "The Indigenous Foundation",
          description: "Educational resources on Indigenous history, culture, and contemporary issues.",
          url: "https://www.theindigenousfoundation.org/",
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-background py-20">
      <div className="container">
        <h1 className="text-5xl font-bold mb-6 text-foreground">
          Resources & Next Steps
        </h1>
        <p className="text-xl text-muted-foreground mb-16 max-w-3xl">
          Education is the first step toward reconciliation. Use these resources to deepen your understanding and take action.
        </p>

        <div className="space-y-12">
          {resources.map((section) => (
            <div key={section.category}>
              <h2 className="text-3xl font-bold mb-6 text-foreground">
                {section.category}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {section.items.map((item) => (
                  <Card
                    key={item.title}
                    className="hover:shadow-lg transition-shadow"
                  >
                    <CardHeader>
                      <CardTitle className="text-lg flex items-start justify-between gap-2">
                        {item.title}
                        <ExternalLink size={18} className="flex-shrink-0 text-primary" />
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-muted-foreground text-sm">
                        {item.description}
                      </p>
                      <a href={item.url} target="_blank" rel="noopener noreferrer">
                        <Button
                          variant="outline"
                          size="sm"
                          className="w-full"
                        >
                          Visit Resource
                        </Button>
                      </a>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>

        <Card className="mt-16 bg-primary text-primary-foreground">
          <CardHeader>
            <CardTitle className="text-2xl">How to Take Action</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="font-bold mb-2">1. Educate Yourself</h3>
              <p className="opacity-90">
                Read the TRC report and Calls to Action. Understand the history and current status of reconciliation efforts.
              </p>
            </div>
            <div>
              <h3 className="font-bold mb-2">2. Educate Others</h3>
              <p className="opacity-90">
                Share this website, the research, and the Calls to Action with your peers, family, and community.
              </p>
            </div>
            <div>
              <h3 className="font-bold mb-2">3. Demand Accountability</h3>
              <p className="opacity-90">
                Contact your elected representatives. Ask them what they are doing to implement the Calls to Action. Demand measurable progress.
              </p>
            </div>
            <div>
              <h3 className="font-bold mb-2">4. Support Indigenous Organizations</h3>
              <p className="opacity-90">
                Donate to, volunteer with, or amplify Indigenous-led organizations working on education, health, and child welfare.
              </p>
            </div>
            <div>
              <h3 className="font-bold mb-2">5. Recognize Your Role</h3>
              <p className="opacity-90">
                Understand that indifference is complicity. Reconciliation is not optional—it is a moral imperative.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="mt-8 border-l-4 border-l-primary">
          <CardHeader>
            <CardTitle className="text-2xl">Key Takeaways</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-muted-foreground">
            <p>
              <strong>1. Reserve living conditions are a crisis:</strong> Housing, water, education, and health disparities are not inevitable—they are the result of colonial policies and ongoing neglect.
            </p>
            <p>
              <strong>2. The Calls to Action are urgent:</strong> They are not historical recommendations. They are blueprints for justice that demand immediate implementation.
            </p>
            <p>
              <strong>3. Progress is insufficient:</strong> Despite some funding increases and legislative changes, systemic inequities persist. Half-measures are not enough.
            </p>
            <p>
              <strong>4. True reconciliation requires action:</strong> Apologies and acknowledgement are necessary but not sufficient. We need measurable, concrete change.
            </p>
            <p>
              <strong>5. Indifference has a cost:</strong> When we remain indifferent, we accept a tiered society and perpetuate intergenerational trauma. Reconciliation is a collective responsibility.
            </p>
          </CardContent>
        </Card>

        <div className="mt-16 text-center">
          <h2 className="text-3xl font-bold mb-6 text-foreground">
            Reconciliation Starts With You
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            This website is a call to action. It is a demand for justice. It is a reminder that reconciliation is not passive—it requires all of us to show up, educate ourselves, and demand systemic change.
          </p>
          <p className="text-xl font-semibold text-primary">
            The time for half-measures has passed. The time for real reconciliation is now.
          </p>
        </div>
      </div>
    </div>
  );
}
