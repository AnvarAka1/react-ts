import React, { SyntheticEvent, useEffect, useState } from 'react'
import Autocomplete from "@mui/material/Autocomplete"
import { CircularProgress, TextField } from "@mui/material"
import FieldWrapper from "src/components/Fields/FieldWrapper"

interface Props {
  readonly name: string
  readonly label: string
}

type OptionType = {
  readonly title: string
  readonly id: number
}

const defaultValue = null

function AsyncSelectField ({ name, label }: Props) {
  const [open, setOpen] = useState(false)
  const [options, setOptions] = useState<OptionType[]>([{ title: 'hello', id: 2 }])
  const [loading, setLoading] = useState(false)


  useEffect(() => {
    let active = true

    if (open) {
      setLoading(true)
    }

    (async () => {
      try {
        const response = await new Promise<OptionType[]>(resolve => {
          setTimeout(() => {
            resolve([{ id: 1, title: 'Interesting' }])
          }, 2000)
        })


        if (active) {
          setOptions(response)
          setLoading(false)
        }
      } catch (error) {
        console.warn(error)
      }

    })()

    return () => {
      active = false
    }
  }, [open])

  useEffect(() => {
    if (!open) {
      setOptions([])
    }
  }, [open])


  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const getOptionLabel = (option: OptionType) => {
    return option.title
  }

  const isOptionEqualToValue = (option: OptionType, value: OptionType) => {
    return option.title === value.title
  }


  return (
    <FieldWrapper name={name}>
      {({ input }) => {
        const handleChange = (event: SyntheticEvent<Element, Event>, newValue: object | null) => {
          input.onChange(newValue)
        }

        return (
          <Autocomplete
            open={open}
            onOpen={handleOpen}
            onClose={handleClose}
            isOptionEqualToValue={isOptionEqualToValue}
            getOptionLabel={getOptionLabel}
            onChange={handleChange}
            value={(input.value || defaultValue) as OptionType}
            options={options}
            loading={loading}
            renderInput={params => (
              <TextField
                {...params}
                label={label}
                InputProps={{
                  ...params.InputProps,
                  endAdornment: (
                    <>
                      {loading ? <CircularProgress color={"inherit"} size={20}/> : null}
                      {params.InputProps.endAdornment}
                    </>
                  )
                }}

              />
            )
            }
          />
        )

      }
      }
    </FieldWrapper>

  )
}

export default AsyncSelectField
