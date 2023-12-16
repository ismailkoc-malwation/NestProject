import { ObjectId } from 'mongoose';
import * as joi from 'joi';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateBookRequestDto {
  @ApiProperty({
    description: 'Book ID',
    example: '5f5d2a7e8d8e4c1a0c7f1b8d',
  })
  bookID: ObjectId;
  @ApiProperty({
    description: 'Book name',
    example: 'Test Book',
  })
  bookName?: string;
  @ApiProperty({
    description: 'Book price',
    example: 100,
  })
  price?: number;
  @ApiProperty({
    type: String,
    description: 'Author ID',
    example: '5f5d2a7e8d8e4c1a0c7f1b8d',
  })
  authorID?: ObjectId;
  @ApiProperty({
    type: [String],
    description: 'Category ID',
    example: '["5f5d2a7e8d8e4c1a0c7f1b8d"]',
  })
  categoryID?: ObjectId[];
}

export const UpdateBookValidation = joi.object({
  bookID: joi.string().required(),
  bookName: joi.string().min(1).max(50),
  price: joi.number(),
  authorID: joi.string(),
  categoryID: joi.array().items(joi.string()),
});
