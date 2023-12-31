//package com.ssafy.web.filter;
//
//import java.io.IOException;
//
//import javax.servlet.Filter;
//import javax.servlet.FilterChain;
//import javax.servlet.ServletException;
//import javax.servlet.ServletRequest;
//import javax.servlet.ServletResponse;
//import javax.servlet.http.HttpServletRequest;
//import javax.servlet.http.HttpServletResponse;
//import javax.servlet.http.HttpSession;
//
//import org.springframework.util.PatternMatchUtils;
//
//import lombok.extern.slf4j.Slf4j;
//
//@Slf4j
//public class LoginCheckFilter implements Filter {
//	private static final String[] whitelist = {"/assets/**", "/favicon.ico", "/", "/error", "/login", "/user/login", "/user/signup", "/logout", "/css/*" };
//
//	@Override
//	public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain)
//			throws IOException, ServletException {
//		HttpServletRequest httpRequest = (HttpServletRequest) request;
//		String requestURI = httpRequest.getRequestURI();
//		HttpServletResponse httpResponse = (HttpServletResponse) response;
//
//		try {
//			if (isLoginCheckPath(requestURI)) {
//				HttpSession session = httpRequest.getSession(false);
//				if (session == null || session.getAttribute("login") == null) {
//					System.out.println("미인증 사용자 요청 "+requestURI);
//					// 로그인으로 redirect
//					httpResponse.sendRedirect("/login");
//					return; // 여기가 중요, 미인증 사용자는 다음으로 진행하지 않고 끝!
//				}
//			}
//			chain.doFilter(request, response); // 다음 필터 진행. 없다면 서블릿 띄우기
//			chain.doFilter(request, response); // 다음 필터 진행. 없다면 서블릿 띄우기
//		} catch (Exception e) {
//			throw e; // 예외 로깅 가능 하지만, 톰캣까지 예외를 보내주어야 함
//		} finally {
//			System.out.println("인증 체크 필터 종료 " + requestURI);
//		}
//	}
//
//	private boolean isLoginCheckPath(String requestURI) {
//		return !PatternMatchUtils.simpleMatch(whitelist, requestURI);
//	}
//}
