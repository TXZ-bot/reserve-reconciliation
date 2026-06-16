import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertCircle } from "lucide-react";

export default function ConditionsPage() {
  return (
    <div className="min-h-screen bg-background py-20">
      <div className="container">
        <h1 className="text-5xl font-bold mb-6 text-foreground">
          Reserve Living Conditions: The Reality
        </h1>
        <p className="text-xl text-muted-foreground mb-16 max-w-3xl">
          Beyond statistics lie real communities facing systemic inequities. These conditions are not natural or inevitable—they are the direct result of colonial policies and ongoing government neglect.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Housing Crisis */}
          <Card className="border-l-4 border-l-primary">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertCircle className="text-primary" />
                Housing Crisis
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-bold text-foreground mb-2">The Numbers</h4>
                <ul className="space-y-1 text-muted-foreground text-sm">
                  <li>• Overcrowding, mold, and structural damage widespread</li>
                  <li>• Many homes lack proper insulation and heating</li>
                  <li>• Fire risk significantly higher than national average</li>
                  <li>• Court ruling confirms Canada legal duty to provide adequate housing</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-foreground mb-2">The Impact</h4>
                <p className="text-sm text-muted-foreground">
                  Poor housing directly contributes to health problems, child welfare interventions, and intergenerational trauma.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Water Crisis */}
          <Card className="border-l-4 border-l-primary">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertCircle className="text-primary" />
                Safe Drinking Water Crisis
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-bold text-foreground mb-2">The Numbers</h4>
                <ul className="space-y-1 text-muted-foreground text-sm">
                  <li>• 38 long-term drinking water advisories still in effect</li>
                  <li>• 618 First Nations communities lack safe drinking water</li>
                  <li>• Canada has world 3rd largest freshwater reserves</li>
                  <li>• Yet Indigenous communities remain without access</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-foreground mb-2">The Impact</h4>
                <p className="text-sm text-muted-foreground">
                  Contaminated water leads to illness, developmental delays in children, and psychological stress from living with constant health threats.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Education Inequity */}
          <Card className="border-l-4 border-l-primary">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertCircle className="text-primary" />
                Education Inequity
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-bold text-foreground mb-2">The Numbers</h4>
                <ul className="space-y-1 text-muted-foreground text-sm">
                  <li>• Underfunded school buildings with outdated facilities</li>
                  <li>• Teacher shortages due to lower salaries on reserves</li>
                  <li>• Limited access to advanced programs and resources</li>
                  <li>• 112% funding increase still leaves gap unfilled</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-foreground mb-2">The Impact</h4>
                <p className="text-sm text-muted-foreground">
                  Students receive inferior education, limiting future opportunities and perpetuating cycles of poverty.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Health Disparities */}
          <Card className="border-l-4 border-l-primary">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertCircle className="text-primary" />
                Health Disparities
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-bold text-foreground mb-2">The Numbers</h4>
                <ul className="space-y-1 text-muted-foreground text-sm">
                  <li>• Infant mortality: 6.8 per 1,000 (vs 4.4 non-Indigenous)</li>
                  <li>• Suicide rate: 2x higher on-reserve than off-reserve</li>
                  <li>• Life expectancy gap: 15 years lower</li>
                  <li>• Limited access to mental health services</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-foreground mb-2">The Impact</h4>
                <p className="text-sm text-muted-foreground">
                  Preventable deaths, untreated mental health crises, and a community living under constant stress.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* The Cycle */}
        <Card className="bg-accent/5 border-2 border-accent mb-12">
          <CardHeader>
            <CardTitle className="text-2xl">The Intergenerational Cycle</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <p className="text-muted-foreground">
                These conditions do not exist in isolation. They are interconnected, creating a cycle that traps families and communities:
              </p>
              <div className="bg-background rounded-lg p-6 space-y-3">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm">
                    1
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground">Poor Housing & Living Conditions</h4>
                    <p className="text-sm text-muted-foreground">Overcrowding, mold, contaminated water, inadequate heating</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm">
                    2
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground">Health & Development Issues</h4>
                    <p className="text-sm text-muted-foreground">Children get sick, struggle in school, develop mental health challenges</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm">
                    3
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground">Family Separation</h4>
                    <p className="text-sm text-muted-foreground">Child welfare removes children due to poverty and neglect—not abuse, but poverty</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm">
                    4
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground">Intergenerational Trauma</h4>
                    <p className="text-sm text-muted-foreground">Separated children experience trauma, perpetuating the cycle for the next generation</p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* The Cost of Indifference */}
        <Card className="bg-destructive/10 border-2 border-destructive">
          <CardHeader>
            <CardTitle className="text-2xl">The Cost of Canadian Indifference</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">
              When Canadians remain indifferent to reserve living conditions, we accept a tiered society where Indigenous people are treated as second-class in their own land.
            </p>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <strong>We lose brilliance:</strong> Underfunded schools and poor health hold back Indigenous youth who could contribute immensely to society.
              </li>
              <li>
                <strong>We damage our reputation:</strong> Canada claims to be a human rights champion while allowing systemic inequity to persist.
              </li>
              <li>
                <strong>We perpetuate injustice:</strong> Every year of inaction means another cohort of children grows up in crisis conditions.
              </li>
              <li>
                <strong>We fail reconciliation:</strong> True reconciliation requires not only acknowledgement but also proven action.
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
