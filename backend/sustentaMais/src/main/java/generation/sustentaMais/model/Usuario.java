package generation.sustentaMais.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.Email;
import javax.validation.constraints.Size;

import com.sun.istack.NotNull;

@Entity
@Table(name = "TB_USUARIO")
public class Usuario {
	@Column(name = "cd_usuario", nullable = false, length = 60)
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	
	@Column(name = "nm_usuario", nullable = false, length = 60)
	@NotNull
	@Size(min = 2, max = 60)
	private String nome;
	
	@Column(name = "em_usuario", nullable = false, length = 60)
	@Email
	@Size(min = 2, max = 60)
	private String email;
	
	@Column(name = "cd_senha", nullable = false, length = 255)
	@Size(min = 6, max = 255)
	private String senha;

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getSenha() {
		return senha;
	}

	public void setSenha(String senha) {
		this.senha = senha;
	}
}
