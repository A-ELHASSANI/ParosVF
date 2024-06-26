package com.mycompany.myapp.domain;

import javax.annotation.Generated;
import javax.persistence.metamodel.SetAttribute;
import javax.persistence.metamodel.SingularAttribute;
import javax.persistence.metamodel.StaticMetamodel;

@Generated(value = "org.hibernate.jpamodelgen.JPAMetaModelEntityProcessor")
@StaticMetamodel(Client.class)
public abstract class Client_ {

	public static volatile SingularAttribute<Client, String> localite;
	public static volatile SingularAttribute<Client, String> adresse;
	public static volatile SingularAttribute<Client, Long> id;
	public static volatile SetAttribute<Client, Visite> visites;
	public static volatile SetAttribute<Client, TypeClient> typeClients;
	public static volatile SingularAttribute<Client, String> nom;
	public static volatile SingularAttribute<Client, String> prenom;
	public static volatile SingularAttribute<Client, String> numTel;
	public static volatile SingularAttribute<Client, User> user;
	public static volatile SingularAttribute<Client, Integer> npa;
	public static volatile SingularAttribute<Client, String> email;

}

