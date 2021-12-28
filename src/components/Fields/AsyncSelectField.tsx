import React, { SyntheticEvent, useEffect, useState } from 'react'
import Autocomplete from '@mui/material/Autocomplete'
import { CircularProgress, TextField } from '@mui/material'

import FieldWrapper from 'src/components/Fields/FieldWrapper'

export type AsyncSelectFieldProps = {
  readonly name: string
  readonly label: string
}

type OptionType = {
  readonly title: string
  readonly id: number
}

const defaultValue = null

const testResponse = [
  { id: 1, title: 'Interesting' },
  { id: 2, title: 'Very good' }
]

function AsyncSelectField ({ name, label }: AsyncSelectFieldProps) {
  const [open, setOpen] = useState(false)
  const [loading, setLoading] = useState(false)
  const [options, setOptions] = useState<OptionType[]>([])
  const [value, setValue] = useState('')

  useEffect(() => {
    let active = true

    if (open) {
      (async () => {
        try {
          setLoading(true)
          const response = await new Promise<OptionType[]>(resolve => {
            setTimeout(() => {
              resolve(testResponse)
            }, 2000)
          })

          if (active) {
            setOptions(response)
            setLoading(false)
          }
        } finally {}
      })()
    }

    return () => {
      active = false
      setOptions([])
    }
  }, [open, value])

  useEffect(() => {
    if (!open) {
      setOptions([])
    }
  }, [open])

  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOptions([])
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
        const handleChange = (event: SyntheticEvent<Element, Event>, newValue: Record<string, unknown> | null) => {
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
            onInputChange={(event, value) => setValue(value)}
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
                      {loading ? <CircularProgress color={'inherit'} size={20} /> : null}
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
