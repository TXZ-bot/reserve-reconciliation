import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } from "recharts";

export default function CTAPage() {
  const fundingData = [
    { year: "2015", funding: 694.4 },
    { year: "2020", funding: 900 },
    { year: "2024", funding: 1465 },
  ];

  const healthData = [
    { indicator: "Infant Mortality (per 1,000)", indigenous: 6.8, nonIndigenous: 4.4 },
    { indicator: "Suicide Rate (per 100,000)", indigenous: 24, nonIndigenous: 11 },
    { indicator: "Life Expectancy Gap (years)", indigenous: 15, nonIndigenous: 0 },
  ];

  const childWelfareData = [
    { year: "2015", inCare: 52 },
    { year: "2018", inCare: 53.2 },
    { year: "2021", inCare: 53.8 },
  ];

  return (
    <div className="min-h-screen bg-background py-20">
      <div className="container">
        <h1 className="text-5xl font-bold mb-6 text-foreground">
          The Three Calls to Action
        </h1>
        <p className="text-xl text-muted-foreground mb-16 max-w-3xl">
          These aren't just recommendations. They are urgent demands for systemic change grounded in the lived experiences of Indigenous peoples across Canada.
        </p>

        <Tabs defaultValue="cta8" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="cta8">CTA #8: Education</TabsTrigger>
            <TabsTrigger value="cta19">CTA #19: Health</TabsTrigger>
            <TabsTrigger value="cta1">CTA #1: Child Welfare</TabsTrigger>
          </TabsList>

          {/* CTA #8 */}
          <TabsContent value="cta8" className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-3xl">
                  CTA #8: Eliminate Education Funding Discrepancy
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold mb-3 text-foreground">The Call</h3>
                  <p className="text-lg text-muted-foreground">
                    We call upon the federal government to eliminate the discrepancy in federal education funding for First Nations children being educated on reserves and those First Nations children being educated off reserves.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-3 text-foreground">Status: In Progress (But Insufficient)</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>✓ 2024 Budget allocated $694.4 million over 2 years</li>
                    <li>✓ 112% funding increase since 2015</li>
                    <li>✓ 11 regional education agreements in place</li>
                    <li>✗ Gap still exists in infrastructure, teacher salaries, resources</li>
                    <li>✗ Equitable resources for non-reserve schools not yet achieved</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-4 text-foreground">Funding Trend</h3>
                  <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={fundingData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="year" />
                      <YAxis />
                      <Tooltip />
                      <Bar dataKey="funding" fill="#1B4D2E" name="Funding ($ millions)" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>

                <div className="bg-accent/10 border border-accent rounded-lg p-6">
                  <h3 className="text-lg font-bold mb-3 text-foreground">The Urgency</h3>
                  <p className="text-muted-foreground">
                    "Even though funding has increased by 112% since 2015, the gap still exists. Every year we wait for the complete elimination of the funding gap, another group of students drops out without proper resources. We are failing them right now."
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-3 text-foreground">What Needs to Happen</h3>
                  <ul className="space-y-2 text-muted-foreground list-disc list-inside">
                    <li>Complete elimination of the funding gap</li>
                    <li>Equitable resources for infrastructure improvements</li>
                    <li>Competitive teacher salaries on reserves</li>
                    <li>Access to modern learning materials and technology</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* CTA #19 */}
          <TabsContent value="cta19" className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-3xl">
                  CTA #19: Recognize and Implement Health-Care Rights
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold mb-3 text-foreground">The Call</h3>
                  <p className="text-lg text-muted-foreground">
                    We call upon the federal government to recognize and implement the health-care rights of Aboriginal people as identified in international agreements, and ensure those rights are reflected in Canadian legislation, policy, and practice.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-3 text-foreground">Status: In Progress (But Incomplete)</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>✓ Annual reports published by Statistics Canada</li>
                    <li>✓ Federal funding for Indigenous health services increased</li>
                    <li>✗ No clear measurable goals for health indicators</li>
                    <li>✗ Infant mortality and suicide rates still critically high</li>
                    <li>✗ Clean water access remains inadequate on many reserves</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-4 text-foreground">Health Disparities</h3>
                  <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={healthData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="indicator" width={100} />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Bar dataKey="indigenous" fill="#D4AF37" name="Indigenous" />
                      <Bar dataKey="nonIndigenous" fill="#8B8680" name="Non-Indigenous" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>

                <div className="bg-accent/10 border border-accent rounded-lg p-6">
                  <h3 className="text-lg font-bold mb-3 text-foreground">The Urgency</h3>
                  <p className="text-muted-foreground">
                    "The urgency is literally life and death for some people. When reserves lack clean water or adequate housing, it directly impacts the mental health of the community. The fact that we still need to establish goals for these basic health indicators is a failure of reconciliation."
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-3 text-foreground">What Needs to Happen</h3>
                  <ul className="space-y-2 text-muted-foreground list-disc list-inside">
                    <li>Establish clear, measurable goals for all health indicators</li>
                    <li>Ensure constant funding for community-led health initiatives</li>
                    <li>Guarantee access to clean drinking water on all reserves</li>
                    <li>Implement mental health and suicide prevention programs</li>
                    <li>Address housing and living conditions that impact health</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* CTA #1 */}
          <TabsContent value="cta1" className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-3xl">
                  CTA #1: Reduce Aboriginal Children in Care
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold mb-3 text-foreground">The Call</h3>
                  <p className="text-lg text-muted-foreground">
                    We call upon the federal, provincial, territorial, and Aboriginal governments to commit to reducing the number of Aboriginal children in care by providing sufficient and stable funding to enable Aboriginal communities and child-welfare organizations to keep families together where it is safe to do so, and to provide culturally appropriate services.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-3 text-foreground">Status: In Progress (But Inadequate)</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>✓ Act respecting First Nations, Inuit and Métis children came into effect in 2020</li>
                    <li>✓ $66 million settlement reached in BC</li>
                    <li>✗ Indigenous children still 53.8% of all foster children (7.7% of child population)</li>
                    <li>✗ Act not fully implemented across all provinces</li>
                    <li>✗ Poverty and housing issues remain unaddressed</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-4 text-foreground">Indigenous Children in Foster Care</h3>
                  <ResponsiveContainer width="100%" height={300}>
                    <LineChart data={childWelfareData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="year" />
                      <YAxis />
                      <Tooltip />
                      <Line
                        type="monotone"
                        dataKey="inCare"
                        stroke="#D4AF37"
                        strokeWidth={3}
                        name="% of Foster Children"
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>

                <div className="bg-accent/10 border border-accent rounded-lg p-6">
                  <h3 className="text-lg font-bold mb-3 text-foreground">The Urgency</h3>
                  <p className="text-muted-foreground">
                    "This urgency is survival. The $66 million settlement in BC shows the damage is ongoing. If we don't address the housing and poverty issues on reserve, the child welfare system will continue to act as a modern-day residential school system."
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-3 text-foreground">What Needs to Happen</h3>
                  <ul className="space-y-2 text-muted-foreground list-disc list-inside">
                    <li>Fully implement the Act across all provinces and territories</li>
                    <li>Provide adequate funding for prevention services</li>
                    <li>Address poverty and housing issues on reserves</li>
                    <li>Support family reunification programs</li>
                    <li>Ensure culturally appropriate child welfare practices</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Bottom CTA */}
        <div className="mt-16 bg-primary text-primary-foreground rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">
            These Calls to Action Are Not Optional
          </h2>
          <p className="text-lg opacity-90">
            They represent the minimum requirements for meaningful reconciliation. The time for half-measures has passed.
          </p>
        </div>
      </div>
    </div>
  );
}
