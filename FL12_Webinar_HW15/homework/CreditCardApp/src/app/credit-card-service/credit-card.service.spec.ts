import { TestBed } from '@angular/core/testing';

import { CreditCardService } from './credit-card.service';
import { cardErrors } from './../static-data/card-errors';

describe('CreditCardService', () => {
  let service: CreditCardService;
  let message: string;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreditCardService);
    // [
    //   this.VALID_CARD,
    //   this.UNKNOWN_TYPE,
    //   this.INVALID_NUMBER,
    //   this.INVALID_NUMBER_FORMAT,
    //   this.INVALID_LENGTH,
    //   this.SCAM_ATTEMPT
    // ] = cardErrors;
  });

  it('should create CreditCardService', async () => {
    expect(service).toBeTruthy();
  });

  it('should return result with message:UNKNOWN_TYPE if card has unknown type', async () => {
    message = service.testCreditCard('5500 0000 0000 0004', 'randomType').message;
    expect(message).toEqual('Unknown card type');
  });

  it('should return result with message:INVALID_NUMBER_FORMAT if card number has incorrect format', async () => {
    message = service.testCreditCard('340w 0000 0000 009', 'AmEx').message;
    expect(message).toEqual('Credit card number is in invalid format');
  });

  it('should return result with message:INVALID_NUMBER if card number is not correct according to modulus 10 algorithm', async () => {
    message = service.testCreditCard('3400 0000 0000 208', 'AmEx').message;
    expect(message).toEqual('Credit card number is invalid');
  });

  it('should return result with message:INVALID_NUMBER if card number prefix is invalid', async () => {
    message = service.testCreditCard('4400 0000 0000 008', 'AmEx').message;
    expect(message).toEqual('Credit card number is invalid');
  });

  it('should return result with message:SCAM_ATTEMPT if card number scam attempt', async () => {
    message = service.testCreditCard('5490 9977 7109 2064', 'MasterCard').message;
    expect(message).toEqual('Warning! This credit card number is associated with a scam attempt');
  });

  it('should return result with message:INVALID_LENGTH if card number length is less than appropriate', async () => {
    message = service.testCreditCard('3400 0000 0000 0091', 'AmEx').message;
    expect(message).toEqual('Credit card number has an inappropriate number of digits');
  });

  it('should return result with message:VALID_CARD if card number is completely verified', async () => {
    message = service.testCreditCard('3400 0000 0000 009', 'AmEx').message;
    expect(message).toEqual('Credit card has a valid format');
  });
  
});
