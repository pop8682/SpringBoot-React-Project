
# SpringBoot-React-SPA

[Spring Security](#security)   
[Spring REST](#rest)



## Join

> Do not use camelCase for the dto member variables  
> there is a high chance to get an error if you have the duplicated value names of database


<a name="security"></a>
## Spring Security
[Spring-security-구조](https://minwan1.github.io/2017/03/25/2017-03-25-spring-security-theory/)


<a name="rest"></a>
## Spring Rest

> Using the camelCase on the name of dto variables recomended 

1. *Expose Id* for specific class
```
@Configuration
public class RepositoryConfig extends RepositoryRestConfigurerAdapter{

	@Override
	public void configureRepositoryRestConfiguration(RepositoryRestConfiguration config) {
		config.exposeIdsFor(OptionDto.class);
	}
}
```

![Figure](file:///Users/byeonggilpark/Desktopimage.png)


## Thymeleaf
1. Spring security tag

```
<dependency>
	<groupId>org.thymeleaf.extras</groupId>
	<artifactId>thymeleaf-extras-springsecurity5</artifactId>
</dependency>
```

[Thymeleaf - Spring Security integration modules](https://github.com/thymeleaf/thymeleaf-extras-springsecurity)



