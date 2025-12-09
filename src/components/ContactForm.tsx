"use client";
import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { sendEmailAction } from "@/lib/actions";
import { cn } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { ErrorLine } from "@/components/ui/error-line";
import { ContactFormSchema, contactFormSchema } from "@/lib/schema";
import { toast } from "sonner";

function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormSchema>({ resolver: zodResolver(contactFormSchema) });

  const onSubmit = async (values: ContactFormSchema) => {
    const { data, error } = await sendEmailAction(values);

    if (error) {
      toast.error(error);
      return;
    }

    toast.success(data);
    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col items-center gap-5"
    >
      <div className="w-full max-w-xl">
        <Label
          htmlFor="email"
          className={cn(errors.email?.message && "text-destructive")}
        >
          Email
        </Label>
        <Input
          type="email"
          id="email"
          placeholder="hello@gmail.com"
          {...register("email")}
          className={cn(errors.email?.message && "border-destructive")}
        />
        <ErrorLine message={errors.email?.message} />
      </div>
      <div className="w-full max-w-xl">
        <Label
          htmlFor="message"
          className={cn(errors.message?.message && "text-destructive")}
        >
          Message
        </Label>
        <Textarea
          id="message"
          placeholder="Hello! What's up?"
          {...register("message")}
          className={cn(errors.message?.message && "border-destructive")}
        />
        <ErrorLine message={errors.message?.message} />
      </div>
      <Button type={"submit"} size="lg">
        Submit <Icons.arrowRight className="ml-2 size-4" />
      </Button>
    </form>
  );
}

export default ContactForm;
