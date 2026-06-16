import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";

export default function ReflectionPage() {
  return (
    <div className="min-h-screen bg-background py-20">
      <div className="container max-w-3xl">
        <h1 className="text-5xl font-bold mb-8 text-foreground">
          A Personal Reflection on Reconciliation
        </h1>

        {/* Personal Journey */}
        <Card className="mb-12 border-l-4 border-l-primary">
          <CardHeader>
            <CardTitle>How My Understanding Has Evolved</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              When I first began researching reserve living conditions, I thought I understood the problem. I knew about residential schools, the historical trauma, the apologies. But I did not truly understand what reconciliation meant beyond acknowledgement.
            </p>
            <p>
              Through this research, I have realized something crucial: reconciliation is not a feeling or a statement. It is a measurable, concrete action. It is funding that actually reaches schools. It is clean water in every home. It is children who stay with their families because poverty is not treated as neglect.
            </p>
            <p>
              The Truth and Reconciliation Commission 94 Calls to Action are not historical documents gathering dust. They are urgent blueprints for justice that we are actively failing to implement.
            </p>
          </CardContent>
        </Card>

        {/* What Reconciliation Looks Like */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="text-2xl">What Does Meaningful Reconciliation Look Like?</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="text-lg font-bold text-foreground mb-3">For Education (CTA #8)</h3>
              <p className="text-muted-foreground mb-3">
                A First Nations child on a reserve should have the same quality of school buildings, teacher salaries, and resources as a child in a wealthy city. That is not radical. That is basic equity.
              </p>
              <p className="text-sm text-muted-foreground italic">
                Reconciliation means: Complete elimination of the funding gap. Competitive teacher salaries on reserves. Modern facilities and technology. Not 112% more of an insufficient amount, but actual sufficiency.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-foreground mb-3">For Health (CTA #19)</h3>
              <p className="text-muted-foreground mb-3">
                In Canada, we should not need to establish measurable goals for infant mortality rates on reserves. This should already be a given. The fact that we are still publishing reports about how bad the situation is, rather than reporting on how we fixed it, is a failure.
              </p>
              <p className="text-sm text-muted-foreground italic">
                Reconciliation means: Clear, measurable health goals with actual deadlines. Constant funding for community-led health initiatives. Access to clean water in every home. Mental health services that are culturally appropriate and accessible.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-foreground mb-3">For Child Welfare (CTA #1)</h3>
              <p className="text-muted-foreground mb-3">
                The most devastating realization: Indigenous children make up 7.7% of the child population but 53.8% of foster children. This is not a coincidence. This is a continuation of the residential school system by another name. We are removing children from their families not because of abuse, but because of poverty—poverty that we created through colonial policies.
              </p>
              <p className="text-sm text-muted-foreground italic">
                Reconciliation means: Fully implementing the Act across all provinces. Funding prevention services so families stay together. Addressing the housing and poverty crisis that forces families apart. Stopping the cycle of intergenerational trauma.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* The Urgency */}
        <Card className="mb-12 bg-primary/5 border-2 border-primary">
          <CardHeader>
            <CardTitle className="text-2xl">Why This Is Urgent</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-muted-foreground">
            <p>
              <strong>For Education:</strong> Every year we wait, another cohort of students drops out without proper resources. We are failing them right now. Not in the future. Now.
            </p>
            <p>
              <strong>For Health:</strong> The urgency is literally life and death. When reserves lack clean water or adequate housing, it directly impacts the mental health of the community. Suicide rates are twice as high on reserves. This is not a statistic. These are preventable deaths.
            </p>
            <p>
              <strong>For Child Welfare:</strong> This urgency is survival. The $66 million settlement in BC shows the damage is ongoing. If we do not address the housing and poverty issues on reserve, the child welfare system will continue to act as a modern-day residential school system.
            </p>
          </CardContent>
        </Card>

        {/* The Cost of Indifference */}
        <Card className="mb-12 bg-destructive/5 border-2 border-destructive">
          <CardHeader>
            <CardTitle className="text-2xl">The Cost of Canadians Remaining Indifferent</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-muted-foreground">
            <p>
              Indifference means accepting a tiered society where Indigenous people are treated as second-class in their own land. We lose the brilliance and contributions of Indigenous youth who underfunded schools and poor health hold back.
            </p>
            <p>
              As I said in my research chart reflection: True reconciliation requires not only acknowledgement but also proof of action. Indifference makes Canada claims of being human rights champions ring hollow. It costs our own reputation.
            </p>
            <p>
              But more importantly, it costs Indigenous communities their futures. Every year of inaction is another year of crisis. Another generation growing up in inadequate housing. Another child removed from their family because of poverty. Another young person lost to suicide.
            </p>
          </CardContent>
        </Card>

        {/* Call to Action */}
        <Card className="bg-primary text-primary-foreground">
          <CardHeader>
            <CardTitle className="text-2xl">What We Must Do</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
              Reconciliation is not passive. It requires action from all of us:
            </p>
            <ul className="space-y-2 list-disc list-inside opacity-90">
              <li>Educate yourself and others about the Calls to Action</li>
              <li>Demand accountability from your elected representatives</li>
              <li>Support Indigenous-led organizations and initiatives</li>
              <li>Recognize that indifference is complicity</li>
              <li>Understand that true reconciliation requires systemic change, not just apologies</li>
            </ul>
            <p className="pt-4 italic">
              "Reconciliation is not just about being sorry for residential schools; it is about fixing the ongoing problems that stem from that history."
            </p>
          </CardContent>
        </Card>

        {/* Navigation */}
        <div className="mt-12 flex gap-4 justify-between">
          <Link href="/conditions">
            <Button variant="outline">Back to Living Conditions</Button>
          </Link>
          <Link href="/resources">
            <Button className="gap-2">
              Explore Resources <ArrowRight size={20} />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
