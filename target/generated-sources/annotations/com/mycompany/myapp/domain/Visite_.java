package com.mycompany.myapp.domain;

import java.time.ZonedDateTime;
import javax.annotation.Generated;
import javax.persistence.metamodel.SetAttribute;
import javax.persistence.metamodel.SingularAttribute;
import javax.persistence.metamodel.StaticMetamodel;

@Generated(value = "org.hibernate.jpamodelgen.JPAMetaModelEntityProcessor")
@StaticMetamodel(Visite.class)
public abstract class Visite_ {

	public static volatile SingularAttribute<Visite, EtatVisite> etatVisite;
	public static volatile SetAttribute<Visite, Client> clients;
	public static volatile SingularAttribute<Visite, ZonedDateTime> dateDebut;
	public static volatile SingularAttribute<Visite, AgentImmobilier> agentImmobilier;
	public static volatile SingularAttribute<Visite, Long> id;
	public static volatile SingularAttribute<Visite, ZonedDateTime> dateFin;
	public static volatile SingularAttribute<Visite, Bien> bien;

}

