import { useForm } from 'react-hook-form'
import * as yup from 'yup'
const InmueblesValidation = ({ persona, categoria }) => {
  const inmueblePFisicaCIndividual_ProductoSchema = yup.object().shape({
    'direccion-inmueble': yup.string().required(),
    'numero-finca-inmueble': yup.string().required(),
    'dominio-inmueble': yup.string().required()
  })

  const inmueblePFisicaCProyectoSchema = yup.object().shape({
    'direccion-inmueble': yup.string().required(),
    psa: yup.bool(),
    'numero-finca-inmueble': yup.string().required(),
    'dominio-inmueble': yup.string().required()
  })

  const inmueblePFisicaCIndustriasSchema = yup.object().shape({
    sinac: yup.string().required(),
    setena: yup.string().required(),
    'direccion-inmueble': yup.string().required(),
    'numero-finca-inmueble': yup.string().required(),
    'dominio-inmueble': yup.string().required()
  })

  const inmueblePFisicaCComercializadoresSchema = yup.object().shape({
    setena: yup.string().required(),
    'direccion-inmueble': yup.string().required(),
    'numero-finca-inmueble': yup.string().required(),
    'dominio-inmueble': yup.string().required()
  })

  const inmueblePJuridicaCIndividual_ProductoSchema = yup.object().shape({
    'nombre-comercial-inmueble': yup.string().required(),
    'direccion-inmueble': yup.string().required(),
    'numero-finca-inmueble': yup.string().required(),
    'dominio-inmueble': yup.string().required()
  })

  const inmueblePJuridicaCProyectoSchema = yup.object().shape({
    'nombre-comercial-inmueble': yup.string().required(),
    psa: yup.bool(),
    'direccion-inmueble': yup.string().required(),
    'numero-finca-inmueble': yup.string().required(),
    'dominio-inmueble': yup.string().required()
  })

  const inmueblePJuridicaCIndustriasSchema = yup.object().shape({
    'nombre-comercial-inmueble': yup.string().required(),
    'direccion-inmueble': yup.string().required(),
    'numero-finca-inmueble': yup.string().required(),
    'dominio-inmueble': yup.string().required()
  })

  const inmueblePJuridicaCComercializadoresSchema = yup.object().shape({
    'nombre-comercial-inmueble': yup.string().required(),
    setena: yup.string().required(),
    'direccion-inmueble': yup.string().required(),
    'numero-finca-inmueble': yup.string().required(),
    'dominio-inmueble': yup.string().required()
  })

  const {
    handleSubmit: handleInmueblePFisicaCIndividual_ProductoSubmit,
    formState: { errors: inmueblePFisicaCIndividual_ProductoErrors },
    control: inmueblePFisicaCIndividual_ProductoControl
  } = useForm({
    resolver: yupResolver(inmueblePFisicaCIndividual_ProductoSchema)
  })

  const {
    handleSubmit: handleInmueblePFisicaCProyectoSubmit,
    formState: { errors: inmueblePFisicaCProyectoErrors },
    control: inmueblePFisicaCProyectoControl
  } = useForm({
    resolver: yupResolver(inmueblePFisicaCProyectoSchema)
  })

  const {
    handleSubmit: handleInmueblePFisicaCIndustriasSubmit,
    formState: { errors: inmueblePFisicaCIndustriasErrors },
    control: inmueblePFisicaCIndustriasControl
  } = useForm({
    resolver: yupResolver(inmueblePFisicaCIndustriasSchema)
  })

  const {
    handleSubmit: handleInmueblePFisicaCComercializadoresSubmit,
    formState: { errors: inmueblePFisicaCComercializadoresErrors },
    control: inmueblePFisicaCComercializadoresControl
  } = useForm({
    resolver: yupResolver(inmueblePFisicaCComercializadoresSchema)
  })

  const {
    handleSubmit: handleInmueblePJuridicaCIndividual_ProductoSubmit,
    formState: { errors: inmueblePJuridicaCIndividual_ProductoErrors },
    control: inmueblePJuridicaCIndividual_ProductoControl
  } = useForm({
    resolver: yupResolver(inmueblePJuridicaCIndividual_ProductoSchema)
  })

  const {
    handleSubmit: handleInmueblePJuridicaCProyectoSubmit,
    formState: { errors: inmueblePJuridicaCProyectoErrors },
    control: inmueblePJuridicaCProyectoControl
  } = useForm({
    resolver: yupResolver(inmueblePJuridicaCProyectoSchema)
  })

  const {
    handleSubmit: handleInmueblePJuridicaCIndustriasSubmit,
    formState: { errors: inmueblePJuridicaCIndustriasErrors },
    control: inmueblePJuridicaCIndustriasControl
  } = useForm({
    resolver: yupResolver(inmueblePJuridicaCIndustriasSchema)
  })

  const {
    handleSubmit: handleInmueblePJuridicaCComercializadoresSubmit,
    formState: { errors: inmueblePJuridicaCComercializadoresErrors },
    control: inmueblePJuridicaCComercializadoresControl
  } = useForm({
    resolver: yupResolver(inmueblePJuridicaCComercializadoresSchema)
  })

  const switchRender = () => {
    switch (true) {
      case persona === 'fisica' && categoria === '1':
        return 'fisicaindividual'
      case persona === 'fisica' && categoria === '2':
        return 'fisicaproducto'
      case persona === 'fisica' && categoria === '3':
        return 'fisicaproyecto'
      case persona === 'fisica' && categoria === '4':
        return 'fisicaindustrias'
      case persona === 'fisica' && categoria === '5':
        return 'fisicacomercializadores'
      case persona === 'juridica' && categoria === '1':
        return 'juridicaindividual'
      case persona === 'juridica' && categoria === '2':
        return 'juridicaproducto'
      case persona === 'juridica' && categoria === '3':
        return 'juridicaproyecto'
      case persona === 'juridica' && categoria === '4':
        return 'juridicaindustrias'
      case persona === 'juridica' && categoria === '5':
        return 'juridicacomercializadores'
    }
  }

  return <></>
}

export default InmueblesValidation
