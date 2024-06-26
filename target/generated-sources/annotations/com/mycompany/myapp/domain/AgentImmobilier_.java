package com.mycompany.myapp.domain;

import javax.annotation.Generated;
import javax.persistence.metamodel.SingularAttribute;
import javax.persistence.metamodel.StaticMetamodel;

@Generated(value = "org.hibernate.jpamodelgen.JPAMetaModelEntityProcessor")
@StaticMetamodel(AgentImmobilier.class)
public abstract class AgentImmobilier_ {

	public static volatile SingularAttribute<AgentImmobilier, String> localite;
	public static volatile SingularAttribute<AgentImmobilier, String> adresse;
	public static volatile SingularAttribute<AgentImmobilier, Long> id;
	public static volatile SingularAttribute<AgentImmobilier, String> nom;
	public static volatile SingularAttribute<AgentImmobilier, String> prenom;
	public static volatile SingularAttribute<AgentImmobilier, String> numTel;
	public static volatile SingularAttribute<AgentImmobilier, User> user;
	public static volatile SingularAttribute<AgentImmobilier, String> npa;
	public static volatile SingularAttribute<AgentImmobilier, String> email;

}

