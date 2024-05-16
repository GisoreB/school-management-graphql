import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateDissertationInput {
  @Field(() => String)
  title: string;

  @Field(() => String)
  description: string;

  @Field(() => String)
  subject: string;
}
