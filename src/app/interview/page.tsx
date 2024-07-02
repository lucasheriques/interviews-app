"use client";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import {
  InterviewExperience,
  interviewExperienceSchema,
} from "@/lib/interviews-shared-types";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

/**
 * Build a form component for collecting interview_experiences
 *  export const interviewExperience = sqliteTable("interview_experience", {
  companyId: integer("company_id", { mode: "number" })
  position: text("position").notNull(),
  receivedOffer: integer("received_offer", { mode: "boolean" }).notNull(),
  acceptedOffer: integer("accepted_offer", { mode: "boolean" }).notNull(),
  experience: text("experience", {
    enum: ["positive", "negative", "neutral"],
  }).notNull(),
  workStyle: text("work_style", {
    enum: ["hybrid", "remote", "onsite"],
  }).notNull(),
  interviewQuestions: text("interview_questions").notNull(),
  interViewDifficulty: text("interview_difficulty", {
    enum: ["easy", "medium", "hard"],
  }).notNull(),
})
 */

export default function HomePage() {
  const form = useForm<InterviewExperience>({
    resolver: zodResolver(interviewExperienceSchema),
  });

  function onSubmit(values: InterviewExperience) {
    console.log(values);
  }

  return (
    <div className="">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <div className="grid grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="companyId"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Empresa</FormLabel>
                  <FormControl>
                    <Input {...field} className="w-full" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="position"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Cargo</FormLabel>
                  <FormControl>
                    <Input {...field} className="w-full" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="receivedOffer"
              render={({ field }) => (
                <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                  <FormLabel>Recebeu oferta</FormLabel>
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="acceptedOffer"
              render={({ field }) => (
                <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                  <FormLabel>Aceitou oferta</FormLabel>
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="experience"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Experiência</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Positiva" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="positive">Positiva</SelectItem>
                      <SelectItem value="neutral">Neutra</SelectItem>
                      <SelectItem value="negative">Negativa</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormDescription>
                    Como foi sua experiência na entrevista?
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="workStyle"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Modelo de trabalho</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Remoto" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="remote">Remoto</SelectItem>
                      <SelectItem value="hybrid">Híbrido</SelectItem>
                      <SelectItem value="onsite">Presencial</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormDescription>
                    Como foi sua experiência na entrevista?
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="interviewDifficulty"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Dificuldade da entrevista</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Média" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="easy">Fácil</SelectItem>
                      <SelectItem value="medium">Média</SelectItem>
                      <SelectItem value="hard">Difícil</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="interviewQuestions"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Perguntas da entrevista</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Algoritmos e estruturas de dados, system design, fundamentos de JavaScript."
                      className="resize-none"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>
                    Quais perguntas fizeram na entrevista?
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <Button type="submit">Enviar</Button>
        </form>
      </Form>
    </div>
  );
}
