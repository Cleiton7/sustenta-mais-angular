package generation.sustentaMais.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import generation.sustentaMais.model.Usuario;

@Repository
public interface SustentaRepository extends JpaRepository<Usuario, Long>{
	public List<Usuario> findAllByTituloContainingIgnoreCase (String titulo);
}
