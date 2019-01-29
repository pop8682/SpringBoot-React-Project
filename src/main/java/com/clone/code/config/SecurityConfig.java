package com.clone.code.config;

import javax.sql.DataSource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.web.authentication.AuthenticationSuccessHandler;

import com.clone.code.dto.UserDto;


@Configuration												
@EnableWebSecurity											// tell spring boot to drop its autoconfigured security policy
@EnableGlobalMethodSecurity(prePostEnabled=true)			// turn on method-level security with Spring Security sophisticated @pre and @post
public class SecurityConfig extends WebSecurityConfigurerAdapter{	// handy  base class to write policy
	
	@Autowired
	private DataSource dataSource;
	
	@Bean 
	public AuthenticationSuccessHandler successHandler() {
		return new SecuritySuccessHandler();
	}
	

	@Override
	protected void configure(AuthenticationManagerBuilder auth) throws Exception {
		auth.jdbcAuthentication().dataSource(dataSource)
		.usersByUsernameQuery("select email, password, enable from user where email=? ")
		.authoritiesByUsernameQuery("select email, role from user where email=? ")
		.passwordEncoder(UserDto.ENCODER);
	}

	@Override
	protected void configure(HttpSecurity http) throws Exception {
		http.authorizeRequests()
				.antMatchers("/built/**").permitAll()
//				.anyRequest().authenticated()
			.and()
				.formLogin()
				.loginPage("/")
				.loginProcessingUrl("/loginConfirm")
				.successHandler(successHandler())
				.permitAll()
			.and()
				.httpBasic()
			.and()
				.csrf().disable().logout().logoutSuccessUrl("/");
	}
	


}
