package com.pranav.springboot.exception;

public class MyCustomException extends RuntimeException {

	private static final long serialVersionUID = 1L;
	
	public MyCustomException(String message)
	{
		super(message);
	}

}
