import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea"
import { Send } from 'lucide-react';





export function ContactMeForm({ className, ...props }) {
  return (
    <div className={cn("flex flex-col gap-6 ", className)} {...props}>
      <Card className={"border-0 bg-transparent "}>
        <CardHeader>
          {/* <CardTitle>Login to your account</CardTitle> */}
          <CardDescription>
            {/* Enter your email below to login to your account */}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="flex flex-col gap-6">
              <div className="flex flex-col md:flex-row  justify-between items-end gap-3">
                <div className="grid gap-3 w-full">
                  <Label htmlFor="email">Name</Label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Your Name"
                    required
                    className={"bg-neutral-100/2 text-xs py-2"}
                  />
                </div>
                <div className="grid gap-3 w-full">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="m@example.com"
                    required
                    className={"bg-neutral-100/2 text-xs"}
                  />
                </div>
              </div>

              <div className="">
                <div className="grid gap-3 w-full">
                  <Label htmlFor="message">Message</Label>
                  <Textarea placeholder="Type your message here." className={"bg-neutral-100/2 text-xs"} />
                </div>
              </div>
             
              <div className="flex flex-col gap-3">
                <Button type="submit" className="w-full">
                  <Send /> Send message
                </Button>
              </div>
            </div>
           
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
