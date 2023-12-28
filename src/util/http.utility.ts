import { HttpException } from '@nestjs/common';
import { ApiErrorEnum } from '../enum/apiError.enum';

/**,
 * Bunu kullanmak yerine direkt olarak
 * NestJS'in error mekanizması kullanılabilir
 * developer experience acısından da daha okunaklı olur.
 * Ornek:
 * throw new BadRequestException();
 * throw new InternalServerErrorException();
 */
export const throwApiError = (statusCode: number, errorCode: ApiErrorEnum) => {
  const indexOf = Object.values(ApiErrorEnum).indexOf(
    errorCode as unknown as ApiErrorEnum,
  );
  throw new HttpException(Object.keys(ApiErrorEnum)[indexOf], statusCode);
};
