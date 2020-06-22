// A camada Service fica entre a Controller e a Repository, ela será responsável agora por chamar a Repository
package generation.sustentaMais.service;

import java.util.Base64;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import generation.sustentaMais.model.Usuario;
import generation.sustentaMais.model.UsuarioLogado;
import generation.sustentaMais.model.UsuarioLogin;
import generation.sustentaMais.repository.UsuarioRepository;

// Anotação do Spring para dizer que essa classe é uma Service
@Service
public class UsuarioService {
	
	// aqui declaramos a repository do usuário para ela ser usada nessa classe 
	@Autowired
	private UsuarioRepository usuarioRepository;
	
	// Recebe objeto do tipo usuario para ser cadastrado e o retorna da model após ser cadastrado
	public Usuario CadastrarUsuario(Usuario usuario) {
		// Instancia o objeto de codificação da senha	
		BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
		
		// codifica a senha recebida do usuario que foi passado como parametro dessa classe	
		String senhaEncoder = encoder.encode(usuario.getSenha());
		// devolve a senha codificada para o objeto usuario que havia sido passado no parametro dessa classe
		usuario.setSenha(senhaEncoder);;
		
		// aqui fica validação se o email ja existe no momento do cadastro
		Optional<Usuario> usuarioCadastro = usuarioRepository.findByEmail(usuario.getEmail());
		if(usuarioCadastro.isPresent() == true) {
			throw new UsernameNotFoundException("Usuario já cadastrado");
		}
		
		// chama a repository que salva o usuario no banco
		return usuarioRepository.save(usuario);
	}
	
	// esse metodo recebe os dados de login e retorna os dados do usuario logado
	public Optional<UsuarioLogado> Logar(UsuarioLogin usuarioLogin) {
		// Instancia o objeto de codificação da senha já que a senha é criptografada ao fazer o login	
		BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
		
		// chama o método que busca no banco o email do usuario que está tentando fazer login
		Optional<Usuario> usuario = usuarioRepository.findByEmail(usuarioLogin.getEmail());
		
		// verifica se foi retornado algo no Optional do tipo Usuario acima
		if(usuario.isPresent() == false) {
			return Optional.empty();
		}
		
		// verifica se a senha e o email do usuario que esta tentando fazer login coincide
		if(encoder.matches(usuarioLogin.getSenha(), usuario.get().getSenha()) == false) {
			return Optional.empty();
		}
		
		// criando token
		String auth = usuarioLogin.getEmail() + ":" + usuarioLogin.getSenha();
		String encoding = Base64.getEncoder().encodeToString((auth).getBytes());
		String authHeader = "Basic " + encoding;
		
		// criando uma instancia do objeto UsuarioLogado
		UsuarioLogado usuarioLogado = new UsuarioLogado();
		usuarioLogado.setCodigo(usuario.get().getId());
		usuarioLogado.setNome(usuario.get().getNome());
		usuarioLogado.setEmail(usuario.get().getEmail());
		usuarioLogado.setToken(authHeader);
		
		return Optional.ofNullable(usuarioLogado); // adiciona o usuarioLogado no objeto do tipo Optional
	}
}
