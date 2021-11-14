import React, { SyntheticEvent, useEffect, useState } from 'react'
import Autocomplete from "@mui/material/Autocomplete"
import { CircularProgress, TextField } from "@mui/material"
import FieldWrapper from "src/components/Fields/FieldWrapper"

interface Props {
  readonly name: string
  readonly label: string
}

type OptionType<T> = {
  readonly title: string
  readonly id: number
  readonly data?: T
}

const defaultValue = null

function AsyncSelectField ({ name, label }: Props) {
  const [open, setOpen] = useState(false)
  const [options, setOptions] = useState<OptionType<any>[]>([{ title: 'hello', id: 2 }])
  const [loading, setLoading] = useState(false)


  useEffect(() => {
    let active = true

    if (open) {
      setLoading(true)
    }

    console.log('hi');

    (async () => {
      try {
        console.log('hello')
        const response = await new Promise<OptionType<any>[]>(resolve => {
          setTimeout(() => {
            resolve([{ id: 1, title: 'Interesting' }])
          }, 2000)
        })


        if (active) {
          setOptions(response)
          setLoading(false)
        }
      } catch (err) {
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

  const getOptionLabel = (option: OptionType<any>) => {
    return option.title
  }

  const isOptionEqualToValue = (option: OptionType<any>, value: OptionType<any>) => {
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
            value={input.value || defaultValue}
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
