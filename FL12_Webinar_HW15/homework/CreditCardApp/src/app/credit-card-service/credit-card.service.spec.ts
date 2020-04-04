import { TestBed } from '@angular/core/testing';

import { CreditCardService } from './credit-card.service';
import { cardErrors } from './../static-data/card-errors';

describe('CreditCardService', () => {
  let service: CreditCardService;

  let [
    VALID_CARD,
    UNKNOWN_TYPE,
    INVALID_NUMBER,
    INVALID_NUMBER_FORMAT,
    INVALID_LENGTH,
    SCAM_ATTEMPT
  ] = cardErrors;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreditCardService);
  });

  it('should create CreditCardService', async () => {
    expect(service).toBeTruthy();
  });

  it('should return result with message:UNKNOWN_TYPE if card has unknown type', async () => {
    const creditCardNumber = '5500 0000 0000 0004';
    const invalidCardType = 'randomType';

    const message = service.testCreditCard(creditCardNumber, invalidCardType).message;

    expect(message).toEqual(UNKNOWN_TYPE);
  });

  it('should return result with message:INVALID_NUMBER_FORMAT if card number has incorrect format', async () => {
    const invalidCardNumber = '340w 0000 0000 009';
    const creditCardType = 'AmEx';

    const message = service.testCreditCard(invalidCardNumber, creditCardType).message;

    expect(message).toEqual(INVALID_NUMBER_FORMAT);
  });

  it('should return result with message:INVALID_NUMBER if card number is not correct according to modulus 10 algorithm', async () => {
    const invalidCardNumber = '3400 0000 0000 208';
    const creditCardType = 'AmEx';

    const message = service.testCreditCard(invalidCardNumber, creditCardType).message;

    expect(message).toEqual(INVALID_NUMBER);
  });

  it('should return result with message:INVALID_NUMBER if card number prefix is invalid', async () => {
    const invalidCardNumber = '4400 0000 0000 008';
    const creditCardType = 'AmEx';

    const message = service.testCreditCard(invalidCardNumber, creditCardType).message;

    expect(message).toEqual(INVALID_NUMBER);
  });

  it('should return result with message:SCAM_ATTEMPT if card number scam attempt', async () => {
    const scamCardNumber = '5490 9977 7109 2064';
    const creditCardType = 'MasterCard';

    const message = service.testCreditCard(scamCardNumber, creditCardType).message;

    expect(message).toEqual(SCAM_ATTEMPT);
  });

  it('should return result with message:INVALID_LENGTH if card number length is less than appropriate', async () => {
    const invalidLengthCardNumber = '3400 0000 0000 0091';
    const creditCardType = 'AmEx';

    const message = service.testCreditCard(invalidLengthCardNumber, creditCardType).message;

    expect(message).toEqual(INVALID_LENGTH);
  });

  it('should return result with message:VALID_CARD if card number is completely verified', async () => {
    const validCardNumber = '3400 0000 0000 009';
    const creditCardType = 'AmEx';

    const message = service.testCreditCard(validCardNumber, creditCardType).message;

    expect(message).toEqual(VALID_CARD);
  });

});
