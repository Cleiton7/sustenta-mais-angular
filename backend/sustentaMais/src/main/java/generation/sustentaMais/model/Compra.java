package generation.sustentaMais.model;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;


@Entity
@Table(name = "TB_COMPRA")
public class Compra {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long cd_compra;
	
	@Column(name = "pc_total", nullable = false, precision = 6, scale = 2)
	@NotNull
	private double pc_total;
	
	@Column(name = "dt_compra", nullable = false)
	@NotNull
	private Date dt_compra =  new java.sql.Date(System.currentTimeMillis());
	
	@Column(name = "cd_produto", nullable = false)
	@NotNull
	private long cd_produto;
	
	@Column(name = "cd_usuario", nullable = false)
	@NotNull
	private long cd_usuario;

	public long getCd_compra() {
		return cd_compra;
	}

	public void setCd_compra(long cd_compra) {
		this.cd_compra = cd_compra;
	}

	public double getPc_total() {
		return pc_total;
	}

	public void setPc_total(double pc_total) {
		this.pc_total = pc_total;
	}

	public Date getDt_compra() {
		return dt_compra;
	}

	public void setDt_compra(Date dt_compra) {
		this.dt_compra = dt_compra;
	}

	public long getCd_produto() {
		return cd_produto;
	}

	public void setCd_produto(long cd_produto) {
		this.cd_produto = cd_produto;
	}

	public long getCd_usuario() {
		return cd_usuario;
	}

	public void setCd_usuario(long cd_usuario) {
		this.cd_usuario = cd_usuario;
	}
}
