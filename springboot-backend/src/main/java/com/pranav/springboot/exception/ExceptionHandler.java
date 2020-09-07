package com.pranav.springboot.exception;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
public class ExceptionHandler {
	
	@org.springframework.web.bind.annotation.ExceptionHandler(ResourceNotFoundException.class)
	public ResponseEntity<Error> getExceptionData(ResourceNotFoundException exception)
	{
		Error error = new Error(404, exception.getMessage());
		return new ResponseEntity<Error>(error,HttpStatus.NOT_FOUND);
	}

}
