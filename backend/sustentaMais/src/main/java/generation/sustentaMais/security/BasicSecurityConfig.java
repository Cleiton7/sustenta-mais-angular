package generation.sustentaMais.security;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

@EnableWebSecurity
public class BasicSecurityConfig extends WebSecurityConfigurerAdapter {
	
	@Autowired
	private UserDetailsService userDetailsService;
	
	@Override
	protected void configure(AuthenticationManagerBuilder auth) throws Exception {
		auth.userDetailsService(userDetailsService);
	}
	
	// define o algoritmo de encriptografia da senha
	@Bean
	public PasswordEncoder passwordEncoder() {
		return new BCryptPasswordEncoder();
	}
	
	// configurações de rotas
	@Override
	protected void configure(HttpSecurity http) throws Exception {
		http
		.httpBasic()
		.and()
			.authorizeRequests()
				.antMatchers(HttpMethod.POST, "/usuario").permitAll() // permite a rota para cadastro de usuario
				.antMatchers(HttpMethod.POST, "/usuario/login").permitAll() // permite a rota para login de usuario
				//.antMatchers(HttpMethod.POST, "/produtos").permitAll() permite a rota para cadastro de produto
				//.antMatchers(HttpMethod.PUT, "/produtos").permitAll() // permite a rota para edição de produto
				//.antMatchers(HttpMethod.GET, "/produtos/{id}").permitAll() // permite a rota para pegar produto por id
				.antMatchers(HttpMethod.GET, "/produtos").permitAll() // permite a rota para listagem de produtos
				.antMatchers(HttpMethod.GET, "/produtos/nome/{nome}").permitAll() // permite a rota para pegar produto por nome
				//.antMatchers(HttpMethod.DELETE, "/produtos/{id}").permitAll() // permite a rota para deletar produto
				.anyRequest().authenticated() // exige autenticação para as demais rotas
		.and()
			.cors()
		.and()
			.sessionManagement()
			.sessionCreationPolicy(SessionCreationPolicy.STATELESS)
		.and()
			.csrf().disable();
	}
}
