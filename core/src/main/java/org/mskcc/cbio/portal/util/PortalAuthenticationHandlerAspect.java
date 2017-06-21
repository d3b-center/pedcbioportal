package org.mskcc.cbio.portal.util;

import org.aspectj.lang.JoinPoint;
import org.aspectj.lang.annotation.After;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Before;

@Aspect
public class PortalAuthenticationHandlerAspect {

	@After("execution(* org.cbioportal.security.spring.PortalSavedRequestAwareAuthenticationSuccessHandler.*(..))")
	public void afterLogin(JoinPoint joinPoint) {

		//System.out.println("User login :  " + SecurityContextHolder.getContext().getAuthentication().getName());
		EventSourcingUtils.logEvent("login", null);
	}

/*	@Around("execution(* org.springframework.security.web.authentication.logout.SecurityContextLogoutHandler.logout(..))")
	public void simpleUrlLogoutSuccessHandler(ProceedingJoinPoint joinPoint) throws Throwable {

		System.out.println("User logout :  " + SecurityContextHolder.getContext().getAuthentication().getName());

		joinPoint.proceed(); // continue on the intercepted method

	}*/
	
	@Before("execution(* org.springframework.security.web.authentication.logout.SecurityContextLogoutHandler.logout(..))")
	public void beforeLogout(JoinPoint joinPoint) {

		//System.out.println("User logout :  " + SecurityContextHolder.getContext().getAuthentication().getName());
		EventSourcingUtils.logEvent("logout", null);
	}


}
